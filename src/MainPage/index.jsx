import React from 'react';
// import TeamPicture from './TeamPicture';
import {Link} from "@reach/router"
import SocialLinks from '../SocialLinks';
import RoadMap from './RoadMap';
import FAQuestion from './FAQuestion';
import MLHTrustBadge from './MLHTrustBadge';
import NavigationBar from './NavigationBar';
import Logo from './Logo';
import '../index.css';

function MainPage() {
  return (<span className="App">
    <section className="hero">
      <MLHTrustBadge/>
      <div className="container">
        <img className="logo" src={require('../images/bigweblogo.png')} alt="HackTJ"/>
        {/* <div className="event-announcement">Registration opens on February 18 at 8pm and closes on March 4 at 8pm</div> */}
        <div className="event-date">March 21-22, 2020</div>
        <div className="event-location">Thomas Jefferson High School for Science and Technology</div>
        <div className="register-button-block-old top">
          {/* TODO: change pictures URL */}
          <a className="button register-button mentor" href="https://www.facebook.com/pg/HackTJOfficial/photos/?tab=album&album_id=2168769876535523">2019 Pictures</a>
          <Link className="button register-button mentor" to={`${process.env.PUBLIC_URL}/history`}>Past Projects</Link>
          <a className="button register-button mentor" href="https://hacktj2019.devpost.com/">Devpost</a>
        </div>
      </div>
    </section>
    <NavigationBar/>
    <a className="anchor" id="intro"></a>
    <section className="intro">
      <div className="container">
        <div className="animation-container vertical left top extra-height" id="trigger">
          <div className="animated"></div>
        </div>
        <p className="large">Do you get excited watching your ideas come to life? Ever wanted to build the next Snapchat or create an Amazon Alexa skill? Program a drone? Create programs using the latest machine learning or virtual reality technology? Come to HackTJ to make new friends, build mind-blowing projects, attend workshops to learn new tricks, and have a fantastic time!</p>
      </div>
    </section>
    {/*
    <a className="anchor" id="registration"></a>
    <section className="registration-info">
      <div className="container">
        <div className="animation-container vertical left top extra-height" id="trigger">
          <div className="animated"></div>
        </div>
        <h1 className="section-title">Registration Info</h1>
        <p className="large">Registration opens on February 18 at 8pm and closes on March 4 at 8pm!</p>
        <p className="large">When you register you&apos;ll be asked for several forms. If you want to be able to submit your registration quickly, fill them out in advance (Emergency Care Form & Field Trip Form, links below).</p>
        <p className="large">When you register we’ll give you the option to upload a resumé, which would be given to certain sponsors looking to recruit hackers. You will also have a chance to submit your resumé after you register if you are not ready to upload it now.</p>
        <p className="large">Please note that registering alone does not guarantee you will receive a ticket. Admission decisions will be made based on a variety of factors including the date/time you register, so make sure to sign up quickly! Admission decisions will be sent out on March 11th.</p>
        <div className="register-button-block-old top">
          <a className="flatbutton register-button" href="forms/fieldtrip.pdf">Field Trip Form</a>
          <a className="flatbutton register-button" href="forms/ecc.pdf">Emergency Care Form</a>
        </div>
      </div>
    </section>
    */}
    <a className="anchor" id="faq"></a>
    <section className="green faq">
      <div className="container">
        <div className="animation-container vertical left top">
          <div className="animated white"></div>
        </div>
        <div className="header-row">
          <div className="animation-container horizontal left-side">
            <div className="animated left white"></div>
          </div>
          <h1 className="section-title">FAQ</h1>
          <div className="animation-container horizontal right-side">
            <div className="animated left white"></div>
          </div>
        </div>
        <ul className="faq-container">
          <div className="row">
            <FAQuestion question="What is HackTJ?" answer=<span>HackTJ is a student-run hackathon at TJHSST, where you will have 24 hours to learn how to code and/or work with your friends to make your idea come to life.</span>/>
            <FAQuestion question="When is HackTJ?" answer=<span>HackTJ will start on Saturday, March 21 and run until Sunday, March 22. Registration closes at 1pm on Saturday. No entry after this time.</span>/>
            <FAQuestion question="Who can attend?" answer=<span>HackTJ is open to any and all current high school students. If you&apos;re not a high school student but would like to attend, consider coming as a mentor or volunteer.</span>/>
          </div>
          <div className="row">
            <FAQuestion question="Is there any cost?" answer=<span>Nope! Thanks to our sponsors, HackTJ is completely free!</span>/>
            <FAQuestion question="Is there a deadline?" answer=<span>Registration will be open starting on February 18th through the beginning of March.</span>/>
            <FAQuestion question="Do you have a code of conduct?" small={true} answer=<span>Yes, good question! We have adopted the <a href="https://hacktj.org/conduct.pdf" target="_blank" rel="noopener noreferrer">MLH code of conduct</a>, which all attendees will be required to adhere to.</span>/>
          </div>
          <div className="row">
            <FAQuestion question="Isn&apos;t hacking illegal?" answer=<span>In the context of a hackathon, &quot;hacking&quot; is to build a real application over the length of the event. It&apos;s important to not confuse this with illegal hacking, which is gaining unauthorized access to a computer.</span>/>
            <FAQuestion question="Do I need a team?" answer=<span>If you already have a team of 2-4 people you want to work with, that&apos;s awesome! If not don&apos;t worry because we&apos;ll have an opportunity for people to join a team if they need one.</span>/>
            <FAQuestion question="What if I don&apos;t know how to code?" small={true} answer=<span>Come to HackTJ! Coding is fun, creative, and an important skill, and HackTJ is the perfect way to learn. We&apos;ll have workshops and mentors to help guide you.</span>/>
          </div>
          <div className="row">
            <FAQuestion question="What should I bring?" answer=<span>You&apos;ll need to bring your laptop, phone, chargers, a sleeping bag/pillow, toiletries, and extra clothing. We suggest you bring a set of nice clothes for demos; you&apos;ll want to make the best impression.</span>/>
            <FAQuestion question="Will there be food?" answer=<span>Yes. Lots and lots of food.</span>/>
            <FAQuestion question="What if I have dietary concerns?" small={true} answer=<span>We&apos;ll be providing meals for most everyone at HackTJ, but if you have special concerns please <a href='mailto:hello@hacktj.org'>let us know</a>.</span>/>
          </div>
        </ul>
        <p className="large">If your question is not answered here, just ask us: <a href="mailto:hello@hacktj.org">hello@hacktj.org</a>.</p>
        <div className="animation-container vertical right bottom">
          <div className="animated white"></div>
        </div>
      </div>
    </section>
    <a className="anchor" id="sponsor"></a>
    <section id="sponsors">
      <div className="container">
        <div className="animation-container vertical top right extra-right extra-height">
          <div className="animated"></div>
        </div>
        <h1 className="section-title">Sponsors</h1>
        <div className="partner-container">
          <Logo url="http://yext.com" logo={require('../images/sponsors/yext.png')} name="Yext"/>
          <Logo url="https://ensco.com" logo={require('../images/sponsors/ensco.png')} name="Ensco"/>
          <Logo url="https://phone2action.com" logo={require('../images/sponsors/phone2action.png')} name="Phone2Action"/>
          <Logo url="https://digitalocean.com" logo={require('../images/sponsors/digitalocean.png')} name="DigitalOcean"/>
          <Logo url="https://www.collinsaerospace.com" logo={require('../images/sponsors/collinsaerospace.jpeg')} name="Collins Aerospace"/>
          <Logo url="https://www.alertfive.io" logo={require('../images/sponsors/alertfive.png')} name="Alert Five"/>
          <Logo url="https://www.thinkfun.com" logo={require('../images/sponsors/thinkfun.png')} name="ThinkFun"/>
        </div>
        <p className="large">Can't see our sponsors? Try disabling ad block for this page.</p>
        <h1 className="section-title">Partners</h1>
        <div className="partner-container">
          <Logo url="http://mlh.io" logo={require('../images/partners/mlh.png')} name="Major League Hacking"/>
          <Logo url="http://tjpartnershipfund.org" logo={require('../images/partners/tjpartnershipfund.jpg')} name="TJ Partnership Fund"/>
        </div>
        <p className="large">
          Interested in sponsoring? Check out our <a href="sponsorship.pdf">sponsorship packet</a> and email us at <a href="mailto:sponsor@hacktj.org">sponsor@hacktj.org</a>.
        </p>
      </div>
    </section>
    <div className="animation-container horizontal sponsors">
      <div className="animated right"></div>
    </div>
    <a className="anchor" id="schedule"></a>
    <section className="schedule" id="schedules">
      <div className="container">
        <div className="animation-container vertical top left extra-height">
          <div className="animated"></div>
        </div>
        <h1 className="section-title">Last Year's Schedule</h1>
        <ul className="day">
          <div className="day-title">
            <h3>Saturday, April 6</h3>
            <div className="animation-container horizontal line-schedule">
              <div className="animated left"></div>
            </div>
          </div>
          <li className="item">
            <h6 className="time">10:00am</h6>
            <div className="description">Student Check-In & Sponsor Fair</div>
          </li>
          <li className="item">
            <h6 className="time">11:00am</h6>
            <div className="description">Opening Ceremony</div>
          </li>
          <li className="item">
            <h6 className="time">11:30am</h6>
            <div className="description">Hacking Begins</div>
          </li>
          <li className="item">
            <h6 className="time">1:00pm</h6>
            <div className="description">Lunch, Registration Closes (no entry after this time)</div>
          </li>
          <li className="item">
            <h6 className="time">2:00pm</h6>
            <div className="description">Workshops Begin</div>
          </li>
          <li className="item">
            <h6 className="time">4:00pm</h6>
            <div className="description">Afternoon Snack</div>
          </li>
          <li className="item">
            <h6 className="time">7:00pm</h6>
            <div className="description">Dinner</div>
          </li>
          <li className="item">
            <h6 className="time">9:00pm</h6>
            <div className="description">Women in Tech Panel
            </div>
          </li>
        </ul>
        <ul className="day">
          <div className="day-title">
            <h3>Sunday, April 7</h3>
            <div className="animation-container horizontal line-schedule">
              <div className="animated left"></div>
            </div>
          </div>
          <li className="item">
            <h6 className="time">12:00am</h6>
            <div className="description">Midnight Snack</div>
          </li>
          <li className="item">
            <h6 className="time">4:00am</h6>
            <div className="description">Late Night Snack</div>
          </li>
          <li className="item">
            <h6 className="time">8:00am</h6>
            <div className="description">Hacking Ends & Breakfast Begins</div>
          </li>
          <li className="item">
            <h6 className="time">8:45am</h6>
            <div className="description">Clean-Up</div>
          </li>
          <li className="item">
            <h6 className="time">9:30am</h6>
            <div className="description">Judging Starts</div>
          </li>
          <li className="item">
            <h6 className="time">11:00am</h6>
            <div className="description">People&apos;s Choice Voting</div>
          </li>
          <li className="item">
            <h6 className="time">11:30am</h6>
            <div className="description">Closing Ceremony</div>
          </li>
          <li className="item">
            <h6 className="time">12:00pm</h6>
            <div className="description">Hackathon Ends</div>
          </li>
        </ul>
      </div>
    </section>
    <a className="anchor" id="team"></a>
    <section className="team" id="team">
      <div className="container">
        <div className="animation-container vertical top left extra-right extra-height">
          <div className="animated"></div>
        </div>
        <h1 className="section-title">Meet the Team</h1>
        <div className="team-pictures">
          <TeamPicture name="Sarah Wang" about="Sarah is the Director of HackTJ 7.0. She is a senior, and first became interested in HackTJ when she participated as a coder in her freshman year. In addition to computer science, Sarah is passionate about biology and chemistry, and is especially interested in how computer science can be applied to these fields. To pursue these interests further, Sarah is the captain of Science Olympiad, and enjoys teaching STEM to others. In her free time, Sarah loves dancing, teaching her dog to fist-bump, and watching Law & Order." image={require('../images/team/sarah.jpeg')}></TeamPicture>
          <TeamPicture name="Kotryna Vismante" about="Kotryna is a current senior and the assistant director and sponsorship lead on the HackTJ 6.0 team. Alongside computer science classes, Kotryna competes in Model UN and is president of Ethics Club. An avid traveler and language-learner, she seeks to connect politics, philosophy, and economics with software and artificial intelligence in a way that facilitates global communication and development. In her leisure time, Kotryna plays on the girl’s soccer team, cooks, and browses Elitist Memes for Every Ivy League Teen (hi Mark Zuckerberg!)." image={require('../images/team/kotryna.jpeg')}></TeamPicture>
          <TeamPicture name="Megan Dass" about="Megan is a senior at TJ and is in charge of social media and workshops for HackTJ 7.0. Megan is intrigued by computer science and she has taken classes like artificial intelligence and computer vision to complement her interest. She is also part of student government, class council, the CyberPatriot team, and the Lincoln-Douglas Debate team. She has a passion to promote STEM in girls, which is why she is the co-founder of the CyberPatriot club at her school. Outside of school, Megan enjoys cooking and watching TV." image={require('../images/team/megan.jpeg')}></TeamPicture>
          <TeamPicture name="Parthiv Chigurupati" about="Parthiv is a senior at TJ and is in his second year of managing the technical infrastructure for HackTJ. He is passionate about computer science, having taken Artificial Intelligence, Computer Vision, and Mobile/Web App Development. Outside of HackTJ, Parthiv works as a Sysadmin to ensure that TJ’s Intranet and web services are always in order, and is currently leading a major overhaul of the school’s servers and workstations. He is also completing two separate machine learning research endeavors through both TJ’s Computer Systems lab and the US Naval Research Laboratory." image={require('../images/team/parthiv.jpeg')}></TeamPicture>
          <TeamPicture name="Sanjana Meduri" about="Sanjana is a senior at TJ and is in charge of the HackTJ judging process. She is passionate about CS and ultimately hopes to work in artificial intelligence when she grows up. She is the President of Coding Lady Colonials, where she gives lectures about different CS topics and works to motivate women in CS. Sanjana is also an avid debater as the captain of the TJ Public Forum Debate Team, and she is the Vice President for TJ Namaste. Outside of school, Sanjana spends almost all of her free time dancing. " image={require('../images/team/sanjana.jpeg')}></TeamPicture>
          <TeamPicture name="Jerry Li" about="Jerry is a senior at TJ and manages registration for HackTJ. He joined the HackTJ team after attending his junior year. Jerry is passionate about computer science, engineering, math, and economics. He is especially interested in artificial intelligence, having pursued AI research, and is currently working on an AI foosball player. Jerry competes in Science Olympiad, Varsity Math Team, Future Problem Solving, EconChallenge, and TJ Swim & Dive. In his free time, he enjoys trading stocks, building airplanes, selling Pokemon cards, and playing bridge." image={require('../images/team/pikachu.jpg')}></TeamPicture>
          <TeamPicture name="Raunak Daga" about="Raunak is a junior at TJ and the website development lead. He is passionate about computer science and excited to be a part of the HackTJ team after participating for two years. He is also a big fan of debate as a teaching coordinator for the TJ Public Forum Debate Team. Outside of school, he spends his free time playing with his Yorkie, listening to music, and watching Futurama." image={require('../images/team/pikachu.jpg')}></TeamPicture>
          <TeamPicture name="Marian Qian" about="Marian is a junior at TJ and works on the merchandise and the internet/tech component for HackTJ. The excitement from the past two HackTJs led her to join the hackathon’s team and she looks forward to planning this year’s HackTJ. She is interested in machine learning in computer science and has a strong passion for astronomy gained from her experience in Science Olympiad. Outside of school, she enjoys sketching and watching TV shows. " image={require('../images/team/pikachu.jpg')}></TeamPicture>
          <TeamPicture name="Tammy Ding" about="Tammy Ding is a junior who serves as the graphic designer for HackTJ branding and merch, and is also responsible for creating and sending invoices. She was inspired by the organization and complexity of HackTJ after participating in the hackathon and writing an article for the school newspaper on the behind-the-scenes of the event. Interested in robotics, engineering, and design, Tammy immerses herself in a variety of extracurriculars, such as Science Olympiad, journalism, National Art Honor Society, and FIRST Tech Challenge." image={require('../images/team/pikachu.jpg')}></TeamPicture>
          <TeamPicture name="Forrest Meng" about="Forrest is a junior and serves as a sponsorship coordinator and maintains DevPost for HackTJ 7.0. He became interested in organizing HackTJ after participating in the hackathon for two years. Being interested in robotics and AI, Forrest is interested in how to spread STEM education and technology into everyday life, so he serves as part of the BranchOut! STEM Education Program management team. Besides interests in engineering and programming, Forrest also is a member of TJ’s Model UN team, a yearbook photographer, a school newspaper staff writer, and participates in the FIRST Tech Challenge." image={require('../images/team/pikachu.jpg')}></TeamPicture>
          <TeamPicture name="Nishitha Vattikonda" about="Nishitha is a junior on the HackTJ team in charge of branding and dining options for the event. She’s a computer science enthusiast, taking advanced CS classes at her high school. Nishitha is the Vice President of Coding Lady Colonials, a computer science club focused on encouraging girls in computer science. She’s interested in working to end the gender gap in STEM fields and working on Fairfax County’s Student Human Right Commission to bring equity to students across the county. In her free time, Nishitha loves watching Friends and spending time with her friends and family!" image={require('../images/team/pikachu.jpg')}></TeamPicture>
          <TeamPicture name="Sadhika Dhanasekar" about="Sadhika is a junior at TJ and is helping out with possible mentors and sponsorships as well as recording and sending invoices. Her past experiences at HackTJ encouraged her to join the team to provide opportunities for the next generations in a variety of technological activities. She has a strong interest in both biology and computer science, hoping to delve deeper into an intersect of the two as offered in bioinformatics. During Sadhika’s free time, she’s often found curled up with a good book or baking with her family. " image={require('../images/team/pikachu.jpg')}></TeamPicture>
          <TeamPicture name="Sumanth Ratna" about="Sumanth is a sophomore at TJ and is a judging coordinator and working to find mentors. Sumanth wanted to join the HackTJ team after participating in HackTJ when he was a freshman last year. Interested in biochemistry and computer science, he likes to attend Bioinformatics Society, Nanotechnology Club, and Ethics Club. He spends most of his free time reading Wikipedia articles on biology, playing sports with his friends and listening to music." image={require('../images/team/pikachu.jpg')}></TeamPicture>
          <TeamPicture name="Pranav Mathur" about="Pranav is a sophomore at TJHSST and works on internet/tech and registration for HackTJ. He loves computer science, especially algorithmic problem solving. He takes artificial intelligence at school and competes in CS competitions with TJ’s computer teams. Pranav is also interested in math and physics, and loves to find ways to apply CS to these subjects. He also enjoys public speaking through TJ’s Forensics Speech team. In his free time, Pranav likes to play tennis and listen to and play music." image={require('../images/team/pikachu.jpg')}></TeamPicture>
          <TeamPicture name="Samhita Vinay" about="Samhita is a sophomore at TJHSST and is one of the volunteer and social media coordinators at HackTJ. She became a part of the HackTJ team after attending HackTJ in her freshman year, and enjoyed the experience since she is passionate about both biology and computer science and the parallels between the two fields. Samhita also participates in Science Olympiad, Biotechnology Club, Biology Olympiad, and Latin Honor Society. In her free time, she enjoys dancing and spending time with her family." image={require('../images/team/pikachu.jpg')}></TeamPicture>
          <TeamPicture name="Mr. Dan Tra" about="Mr. Tra is a computer science teacher at Thomas Jefferson High School for Science and Technology and a teacher sponsor for HackTJ." image={require('../images/team/tra.jpeg')}></TeamPicture>
          <TeamPicture name="Ms. Ria Galanos" about="Ms. Galanos is a computer science teacher at Thomas Jefferson High School for Science and Technology and a teacher sponsor for HackTJ." image={require('../images/team/galanos.jpeg')}></TeamPicture>
        </div>
      </div>
    </section>
    <a className="anchor" id="map"></a>
    <section className="green map">
      <RoadMap/>
      <div className="info-circle" id="map-info" style={{transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
        <div className="info-container">
          <h6>TJHSST</h6>
          <div className="address">6560 Braddock Road</div>
          <div className="address">Alexandria, VA</div>
          <a className="button small" href="https://www.google.com/maps/place/Thomas+Jefferson+High+School+for+Science+and+Technology/@38.8185004,-77.1708548,17z/data=!3m1!4b1!4m2!3m1!1s0x89b7b2e02877e895:0xc12f564af4d3bcab" target="_blank" rel="noopener noreferrer">
            <div className="text">Get Directions</div>
            <div className="icon icon-caret-right"></div>
          </a>
        </div>
      </div>
    </section>

    <section className="green register">
      <div className="container">
        <div className="register-button-block-old bottom">
          <div className="register-text">Be sure to follow our Social Media pages for updates!</div>
        </div>
        <SocialLinks includeHackTJLogo={false}/>
      </div>
    </section>
  </span>);
}

export default MainPage;
