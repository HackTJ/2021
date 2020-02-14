import React from "react";

import TeamPicture from "./TeamPicture";

import "./index.css";

const Team = () => (
  <>
    <a className="anchor" id="team">
      Team
    </a>
    <section className="team" id="team">
      <div className="container">
        <div className="animation-container vertical top left extra-right extra-height">
          <div className="animated"></div>
        </div>
        <h1 className="section-title">Meet the Team</h1>
        <div className="team-pictures">
          <TeamPicture
            name="Sarah Wang"
            about="Sarah is the Director of HackTJ 7.0. She is a senior, and first became interested in HackTJ when she participated as a coder in her freshman year. In addition to computer science, Sarah is passionate about biology and chemistry, and is especially interested in how computer science can be applied to these fields. To pursue these interests further, Sarah is the captain of Science Olympiad, and enjoys teaching STEM to others. In her free time, Sarah loves dancing, teaching her dog to fist-bump, and watching Law & Order."
            image={require("../../images/team/SarahWang.jpg")}
          ></TeamPicture>
          <TeamPicture
            name="Kotryna Vismante"
            about="Kotryna is a current senior and the assistant director and sponsorship lead on the HackTJ 7.0 team. Alongside computer science classes, Kotryna competes in Model UN and is president of Ethics Club. An avid traveler and language-learner, she seeks to connect politics, philosophy, and economics with software and artificial intelligence in a way that facilitates global communication and development. In her leisure time, Kotryna plays on the girl’s soccer team, cooks, and browses Elitist Memes for Every Ivy League Teen (hi Mark Zuckerberg!)."
            image={require("../../images/team/KotrynaVismante.jpg")}
          ></TeamPicture>
          <TeamPicture
            name="Megan Dass"
            about="Megan is a senior at TJ and is in charge of social media and workshops for HackTJ 7.0. Megan is intrigued by computer science and she has taken classes like artificial intelligence and computer vision to complement her interest. She is also part of student government, class council, the CyberPatriot team, and the Lincoln-Douglas Debate team. She has a passion to promote STEM in girls, which is why she is the co-founder of the CyberPatriot club at her school. Outside of school, Megan enjoys cooking and watching TV."
            image={require("../../images/team/MeganDass.jpg")}
          ></TeamPicture>
          <TeamPicture
            name="Parthiv Chigurupati"
            about="Parthiv is a senior at TJ and is in his second year of managing the technical infrastructure for HackTJ. He is passionate about computer science, having taken Artificial Intelligence, Computer Vision, and Mobile/Web App Development. Outside of HackTJ, Parthiv works as a Sysadmin to ensure that TJ’s Intranet and web services are always in order, and is currently leading a major overhaul of the school’s servers and workstations. He is also completing two separate machine learning research endeavors through both TJ’s Computer Systems lab and the US Naval Research Laboratory."
            image={require("../../images/team/ParthivChigurupati.jpg")}
          ></TeamPicture>
          <TeamPicture
            name="Sanjana Meduri"
            about="Sanjana is a senior at TJ and is in charge of the HackTJ judging process. She is passionate about CS and ultimately hopes to work in artificial intelligence when she grows up. She is the President of Coding Lady Colonials, where she gives lectures about different CS topics and works to motivate women in CS. Sanjana is also an avid debater as the captain of the TJ Public Forum Debate Team, and she is the Vice President for TJ Namaste. Outside of school, Sanjana spends almost all of her free time dancing. "
            image={require("../../images/team/SanjanaMeduri.jpg")}
          ></TeamPicture>
          <TeamPicture
            name="Jerry Li"
            about="Jerry is a senior at TJ and manages registration for HackTJ. He joined the HackTJ team after attending his junior year. Jerry is passionate about computer science, engineering, math, and economics. He is especially interested in artificial intelligence, having pursued AI research, and is currently working on an AI foosball player. Jerry competes in Science Olympiad, Varsity Math Team, Future Problem Solving, EconChallenge, and TJ Swim & Dive. In his free time, he enjoys trading stocks, building airplanes, selling Pokemon cards, and playing bridge."
            image={require("../../images/team/JerryLi.jpg")}
          ></TeamPicture>
          <TeamPicture
            name="Raunak Daga"
            about="Raunak is a junior at TJ and the website development lead. He is passionate about computer science and excited to be a part of the HackTJ team after participating for two years. He is also a big fan of debate as a teaching coordinator for the TJ Public Forum Debate Team. Outside of school, he spends his free time playing with his Yorkie, listening to music, and watching Futurama."
            image={require("../../images/team/RaunakDaga.jpg")}
          ></TeamPicture>
          <TeamPicture
            name="Marian Qian"
            about="Marian is a junior at TJ and works on the merchandise and the internet/tech component for HackTJ. The excitement from the past two HackTJs led her to join the hackathon’s team and she looks forward to planning this year’s HackTJ. She is interested in machine learning in computer science and has a strong passion for astronomy gained from her experience in Science Olympiad. Outside of school, she enjoys sketching and watching TV shows. "
            image={require("../../images/team/MarianQian.jpg")}
          ></TeamPicture>
          <TeamPicture
            name="Tammy Ding"
            about="Tammy Ding is a junior who serves as the graphic designer for HackTJ branding and merch, and is also responsible for creating and sending invoices. She was inspired by the organization and complexity of HackTJ after participating in the hackathon and writing an article for the school newspaper on the behind-the-scenes of the event. Interested in robotics, engineering, and design, Tammy immerses herself in a variety of extracurriculars, such as Science Olympiad, journalism, National Art Honor Society, and FIRST Tech Challenge."
            image={require("../../images/team/TammyDing.jpg")}
          ></TeamPicture>
          <TeamPicture
            name="Forrest Meng"
            about="Forrest is a junior and serves as a sponsorship coordinator and maintains DevPost for HackTJ 7.0. He became interested in organizing HackTJ after participating in the hackathon for two years. Being interested in robotics and AI, Forrest is interested in how to spread STEM education and technology into everyday life, so he serves as part of the BranchOut! STEM Education Program management team. Besides interests in engineering and programming, Forrest also is a member of TJ’s Model UN team, a yearbook photographer, a school newspaper staff writer, and participates in the FIRST Tech Challenge."
            image={require("../../images/team/ForrestMeng.jpg")}
          ></TeamPicture>
          <TeamPicture
            name="Nishitha Vattikonda"
            about="Nishitha is a junior on the HackTJ team in charge of branding and dining options for the event. She’s a computer science enthusiast, taking advanced CS classes at her high school. Nishitha is the Vice President of Coding Lady Colonials, a computer science club focused on encouraging girls in computer science. She’s interested in working to end the gender gap in STEM fields and working on Fairfax County’s Student Human Right Commission to bring equity to students across the county. In her free time, Nishitha loves watching Friends and spending time with her friends and family!"
            image={require("../../images/team/NishithaVattikonda.jpg")}
          ></TeamPicture>
          <TeamPicture
            name="Sadhika Dhanasekar"
            about="Sadhika is a junior at TJ and is helping out with possible mentors and sponsorships as well as recording and sending invoices. Her past experiences at HackTJ encouraged her to join the team to provide opportunities for the next generations in a variety of technological activities. She has a strong interest in both biology and computer science, hoping to delve deeper into an intersect of the two as offered in bioinformatics. During Sadhika’s free time, she’s often found curled up with a good book or baking with her family. "
            image={require("../../images/team/SadhikaDhanasekar.jpg")}
          ></TeamPicture>
          <TeamPicture
            name="Sumanth Ratna"
            about="Sumanth is a sophomore at TJ and is a judging coordinator and working to find mentors. He also maintains the HackTJ website. Sumanth wanted to join the HackTJ team after participating in HackTJ when he was a freshman last year. Interested in biochemistry and computer science, he likes to attend Bioinformatics Society, Nanotechnology Club, and Ethics Bowl (where he is on the Committees for Bioethics and Artificial Intelligence). He spends most of his free time playing football and basketball with his friends and listening to music."
            image={require("../../images/team/SumanthRatna.jpg")}
          ></TeamPicture>
          <TeamPicture
            name="Pranav Mathur"
            about="Pranav is a sophomore at TJHSST and works on internet/tech and registration for HackTJ. He loves computer science, especially algorithmic problem solving. He takes artificial intelligence at school and competes in CS competitions with TJ’s computer teams. Pranav is also interested in math and physics, and loves to find ways to apply CS to these subjects. He also enjoys public speaking through TJ’s Forensics Speech team. In his free time, Pranav likes to play tennis and listen to and play music."
            image={require("../../images/team/PranavMathur.jpg")}
          ></TeamPicture>
          <TeamPicture
            name="Samhita Vinay"
            about="Samhita is a sophomore at TJHSST and is one of the volunteer and social media coordinators at HackTJ. She became a part of the HackTJ team after attending HackTJ in her freshman year, and enjoyed the experience since she is passionate about both biology and computer science and the parallels between the two fields. Samhita also participates in Science Olympiad, Biotechnology Club, Biology Olympiad, and Latin Honor Society. In her free time, she enjoys dancing and spending time with her family."
            image={require("../../images/team/SamhitaVinay.jpg")}
          ></TeamPicture>
          <TeamPicture
            name="Ms. Razzino"
            about="Ms. Razzino is a Math Teacher at TJ and also one of the faculty sponsors of HackTJ 7.0. She was the Division Manager for Math and Computer Science at TJ for 5 years and gained an understanding and appreciation for computer science during that time. She also attended TJ back in the late 1990s and fondly remembers her Foundations of CS class. When not creating tests and grading papers, Ms. Razzino enjoys baking, skiing, travelling, and spending time with family and friends. "
            image={require("../../images/team/MsRazzino.jpg")}
          ></TeamPicture>
          <TeamPicture
            name="Ms. Mills"
            about="Ms. Mills is a faculty sponsor for HackTJ 7.0. She teaches Geosystems and Astronomy at TJ, and is also the Lab Director for the Astronomy and Astrophysics senior research lab. She volunteered at HackTJ 6.0. In her free time she enjoys traveling, reading, riding her bike, and spending time with her family and friends."
            image={require("../../images/team/MsMills.jpg")}
          ></TeamPicture>
        </div>
      </div>
    </section>
  </>
);

export default Team;
