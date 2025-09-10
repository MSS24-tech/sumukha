import React from "react";

// Import team images
import team1 from "../assets/image/team_10b892.webp";
import team2 from "../assets/image/team_3d62a.webp";
import team3 from "../assets/image/team_5a32a.webp";
import team4 from "../assets/image/team_6d8ad.webp";

// Import shapes
import teamShape1 from "../assets/image/team_shape_1.webp";

const teamMembers = [
  {
    name: "Esther Howard",
    role: "Mid-Level Developer",
    avatar: team1,
  },
  {
    name: "Leslie Alexander",
    role: "Founder & CEO",
    avatar: team2,
  },
  {
    name: "Theresa Web",
    role: "Merchandiser",
    avatar: team3,
  },
  {
    name: "Floyd Miles",
    role: "Senior Developer",
    avatar: team4,
  },
];

export default function TeamSection() {
  return (
    <section
      className="cs_gray_bg_1 position-relative"
      id="team"
      style={{ padding: "10px" }}
    >
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        {/* Section Heading */}
        <div className="cs_section_heading cs_style_1 text-center">
          <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_center cs_mb_20 wow fadeInDown">
            <span className="cs_shape_left"></span>
            Our Team
            <span className="cs_shape_right"></span>
          </p>
          <h2 className="cs_fs_48 cs_mb_21 wow fadeInUp">
            Our Professional Experts
          </h2>
        </div>

        <div className="cs_height_60 cs_height_lg_50"></div>

        {/* Team Members */}
        <div className="row cs_row_gap_30 cs_gap_y_30 position-relative z-1">
          {teamMembers.map((member, index) => (
            <div className="col-lg-3 col-sm-6 wow fadeInDown" key={index}>
              <div className="cs_team cs_style_1 position-relative">
                <div className="cs_team_thumbnail cs_radius_15 position-relative">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    width="264"
                    height="342"
                    loading="lazy"
                    className="cs_radius_15"
                  />
                  <div className="cs_social_links cs_radius_8 position-absolute">
                    <a
                      aria-label="Instagram"
                      className="cs_social_link cs_center cs_radius_4"
                      href="#"
                    >
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a
                      aria-label="Facebook"
                      className="cs_social_link cs_center cs_radius_4"
                      href="#"
                    >
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a
                      aria-label="Twitter"
                      className="cs_social_link cs_center cs_radius_4"
                      href="#"
                    >
                      <i className="bi bi-twitter-x"></i>
                    </a>
                    <a
                      aria-label="LinkedIn"
                      className="cs_social_link cs_center cs_radius_4"
                      href="#"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="cs_tean_info cs_radius_8 text-center">
                  <h3 className="cs_fs_24 text-capitalize mb-0">
                    <a href="team/team-details.html">{member.name}</a>
                  </h3>
                  <p className="mb-0">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Background Shapes */}
        <div className="cs_team_shape_1 position-absolute"></div>
        <div className="cs_team_shape_2 position-absolute">
          <img
            src={teamShape1}
            alt="Team Shape"
            width="264"
            height="573"
            loading="lazy"
          />
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
}
