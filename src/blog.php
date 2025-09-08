<?php
// --------------------
// Force JSON output & handle CORS
// --------------------
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    echo json_encode(['message' => 'OK']);
    exit;
}

// --------------------
// Disable HTML errors
// --------------------
ini_set('display_errors', 0);
error_reporting(E_ALL);

// --------------------
// Database connection
// --------------------
$servername = "localhost";
$username   = "root";
$password   = "Sharath@1998";
$dbname     = "sumukha";

$conn = new mysqli($servername, $username, $password, $dbname);
$conn->set_charset("utf8mb4");

if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed: ' . $conn->connect_error]);
    exit;
}

// --------------------
// GET: fetch blogs
// --------------------
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $result = $conn->query("SELECT * FROM blogs ORDER BY id DESC");
    if (!$result) {
        http_response_code(500);
        echo json_encode(['error' => 'Database query failed: ' . $conn->error]);
        exit;
    }

    $blogs = [];
    while ($row = $result->fetch_assoc()) {
        $content = html_entity_decode($row['content'], ENT_QUOTES | ENT_HTML5, 'UTF-8');
        $blogs[] = [
            'id'        => (int)$row['id'],
            'author'    => $row['author'],
            'date'      => date('d', strtotime($row['date'])),
            'month'     => date('M', strtotime($row['date'])),
            'heading'   => $row['heading'],
            'title'     => $row['heading'],
            'subtitle'  => mb_substr(strip_tags($content), 0, 100),
            'fullText'  => $content,
            'image'     => $row['image_base64'] ?? null, // fetch Base64 image if exists
            'category'  => 'Blog'
        ];
    }

    echo json_encode($blogs);
    $conn->close();
    exit;
}

// --------------------
// POST: save blog
// --------------------
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);

    if (!$input) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid JSON payload']);
        exit;
    }

    $author  = trim($input['author'] ?? '');
    $date    = !empty($input['date']) ? $input['date'] : date('Y-m-d');
    if (!preg_match('/^\d{4}-\d{2}-\d{2}$/', $date)) $date = date('Y-m-d');
    $heading = trim($input['heading'] ?? '');
    $content = trim($input['content'] ?? '');
    $image   = $input['image'] ?? null; // New field for Base64 image

    if (empty($author) || empty($heading) || empty($content)) {
        http_response_code(400);
        echo json_encode(['error' => 'Missing required fields']);
        exit;
    }

    // Use prepared statement with image_base64 column
    $stmt = $conn->prepare("INSERT INTO blogs (author, date, heading, content, image_base64) VALUES (?, ?, ?, ?, ?)");
    if (!$stmt) {
        http_response_code(500);
        echo json_encode(['error' => 'Database prepare failed: ' . $conn->error]);
        exit;
    }

    $stmt->bind_param("sssss", $author, $date, $heading, $content, $image);

    if ($stmt->execute()) {
        http_response_code(201);
        echo json_encode([
            'message' => 'Blog saved successfully',
            'id'      => $stmt->insert_id
        ]);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Database execute failed: ' . $stmt->error]);
    }

    $stmt->close();
    $conn->close();
    exit;
}

// --------------------
// Any other method
// --------------------
http_response_code(405);
echo json_encode(['error' => 'Method not allowed']);
exit;