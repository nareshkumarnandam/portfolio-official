import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Tooltip } from "@mui/material";
import resume from "../assets/Resume/Naresh_Kumar_Nandam.pdf";

const Contact = () => {
    const handleDownloadResume = () => {
        const link = document.createElement("a");
        link.href = resume;
        link.setAttribute("download", "Naresh_Kumar_Nandam.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
  return (
    <div
      id="contact"
      className="bg-stone-950 rounded-t-3xl mt-20 w-full px-5 lg:px-24 text-white text-center py-10 font-Architects"
    >
      <h1 className="text-3xl lg:text-5xl mb-14 font-extrabold">Contact</h1>
      <p className="text-lg my-6">
        Thank you for visiting my portfolio! If you would like to get in touch,
        feel free to contact me.
      </p>

      <div className="flex mt-10 w-full h-28 justify-center gap-10 items-center lg:px-24">
        <Tooltip title="G-Mail" arrow>
          <a href="mailto:nareshkumarnandam2002@gmail.com">
            <div>
              <EmailIcon sx={{ width: "100%", height: "50px" }} />
            </div>
          </a>
        </Tooltip>
        <Tooltip title="GitHub" arrow>
          <a href="https://github.com/nareshkumarnandam">
            <div>
              <GitHubIcon sx={{ width: "100%", height: "50px" }} />
            </div>
          </a>
        </Tooltip>
        <Tooltip title="Linkedin" arrow>
          <a href="https://www.linkedin.com/in/naresh-kumar-nandam/">
            <div>
              <LinkedInIcon sx={{ width: "100%", height: "50px" }} />
            </div>
          </a>
        </Tooltip>
      </div>
      <div className="flex w-full h-full lg:hidden items-center justify-center mt-5">
                {/* <Button text="Resume" className="bg-black rounded-xl active:scale-95 transition-all text-white w-1/2 h-12" onClick={handleDownloadResume}/>
                 */}
                  <Tooltip title="Click to download my Resume" arrow>
                  <button
                    className="bg-white rounded-xl active:scale-95 transition-all text-black w-1/2 h-12"
                    onClick={handleDownloadResume}
                  >
                    Resume
                  </button>
      
                  </Tooltip>
        </div>
    </div>
  );
};

export default Contact;
