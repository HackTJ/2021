import React from 'react';
// import TeamPicture from './TeamPicture';
import {Link} from "@reach/router"
import SocialLinks from '../SocialLinks';
// import RoadMap from './RoadMap';
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
        <div className="event-announcement">Registration opens on February 18 at 8pm and closes on March 4 at 8pm</div>
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
            <FAQuestion question="Do you have a code of conduct?" small={true} answer=<span>Yes, good question! We have adopted the
              <a href="https://hacktj.org/conduct.pdf" target="_blank" rel="noopener noreferrer">MLH code of conduct</a>, which all attendees will be required to adhere to.</span>/>
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
          <div className="animated" style={{
              height: '15.91%'
            }}></div>
        </div>
        <h1 className="section-title">Sponsors</h1>
        <div className="partner-container">
          <Logo url="http://yext.com" logo={require('../images/sponsors/yext.png')} name="Yext"/>
          <Logo url="https://ensco.com" logo={require('../images/sponsors/ensco.png')} name="Ensco"/>
          <Logo url="https://phone2action.com" logo={require('../images/sponsors/phone2action.png')} name="Phone2Action"/>
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
    {/*<a className="anchor" id="team"></a>
    <section className="team" id="team">
      <div className="container">
        <div className="animation-container vertical top left extra-right extra-height">
          <div className="animated"></div>
        </div>
        <h1 className="section-title">Meet the Team</h1>
        <div className="team-pictures">
          <TeamPicture name="Reilly McBride" about="Reilly is the Director of HackTJ 6.0. She’s a senior, and this is her third year on the organizing team after attending HackTJ her freshman year. In the past, Reilly served as Vice Director and has worked on social media, food, communication, and partnerships. This year, she does a little bit of everything with the help of her amazing team. Reilly loves both computer science and biology, and spends the rest of her time at school dancing and studying Latin. In her free time, Reilly bakes a lot of cakes." image={require('../images/team/reilly.jpeg')}></TeamPicture>
          <TeamPicture name="Sarah Wang" about="Sarah is a junior at TJ and is HackTJ’s Lead Sponsorship Coordinator and invoice creator. She first became interested in computer science in middle school and has since pursued this passion by participating in the USA Computing Olympiad and TJ&apos;s ICT to gain a better algorithmic understanding of computer science. She also loves biology and chemistry and is especially interested in how computer science can be applied to these fields. In addition to computer science, Sarah enjoys dancing, Science Olympiad, fostering girls’ interest in STEM through WISE, volunteering at her local senior home, and watching Law & Order." image={require('../images/team/sarah.jpeg')}></TeamPicture>
          <TeamPicture name="Kotryna Vismante" about="Kotryna is a current junior and the lead sponsorship and volunteer coordinator on the HackTJ 6.0 team. Alongside computer science classes, TJ’s ICT, and the Bioinformatics Society, Kotryna competes in Model UN and the Knowledge@Wharton Investment Competition. An avid traveler and language-learner, she seeks to connect politics, philosophy, and economics with software and machine learning in a way that facilitates global communication and development. In her leisure time, Kotryna plays on the girl’s soccer team, cooks, and browses Elitist Memes for Every Ivy League Teen (hi Mark Zuckerberg!)" image={require('../images/team/kotryna.jpeg')}></TeamPicture>
          <TeamPicture name="Rohan Chaturvedula" about="Rohan Chaturvedula is a senior at Thomas Jefferson High School. Originally, he registered as a participant at HackTJ his freshman year due to his interest in coding. He had a great time, so he wanted to look into joining the organizing committee. Rohan ended up filling out the application and getting selected. The past three years have been filled with great memories and experiences. Additionally, he has really enjoyed putting forth his ideas to make the hackathon even better each year. Outside of HackTJ, he loves to play sports, specifically soccer and basketball for his school – Thomas Jefferson high school." image={require('../images/team/rohan.jpeg')}></TeamPicture>
          <TeamPicture name="Nishitha Vattikonda" about="Nishitha Vattikonda is a sophomore on the HackTJ team working on coordinating sponsor outreach and dining options for the event. She’s a computer science enthusiast, taking advanced CS classes at her high school. Nishitha is the Publicist of Coding Lady Colonials, a computer science club focused on encouraging girls in computer science. She’s interested in working to end the gender gap in STEM fields and working on Fairfax County’s Student Human Right Commission to bring equity to students across the county. In her free time, Nishitha loves watching Friends and spending time with her friends and family!" image={require('../images/team/nishitha.jpeg')}></TeamPicture>
          <TeamPicture name="Rachel Naidich" about="Rachel is a senior at TJHSST and is responsible for the HackTJ website. She loves computer science, and her specific interests include artificial intelligence and the applications of new technology like virtual reality. She competes in programming competitions and is a gold division competitor in the USA Computing Olympiad. As an officer of the Coding Lady Colonials club, she works to empower high school girls to pursue computer science. Her team developed an app that generates the safest routes using traffic accident and risk data at her last hackathon. Outside of coding, she enjoys playing chess and rugby." image={require('../images/team/rachel.jpeg')}></TeamPicture>
          <TeamPicture name="Varun Gannavarapu" about="Varun Gannavarapu is a senior at Thomas Jefferson High School for Science and Technology. Varun is in charge of Hack TJ’s internet/tech, registration, and DevPost submissions. Varun&apos;s interests pertain to robotics, computer science, and physics. Outside of computer science, Varun is a member of TJ&apos;s student government and competes on the varsity wrestling team. In his free time, Varun likes to tutor peers and spend time with his friends. He lives by the words of Helen Keller: &quot;Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.&quot;" image={require('../images/team/varun.jpeg')}></TeamPicture>
          <TeamPicture name="Priyanka Mehta" about="Priyanka Mehta is a senior on the HackTJ 6.0 team working on the registration process, website, and coordinating volunteers for the event. A former web development intern at George Mason University and mobile application intern at an analytics startup, she&apos;s passionate about creating aesthetic and accessible user platforms. When she isn’t coding, Priyanka enjoys reading and reviewing dystopian horror novels, playing with her Goldendoodle puppy, and planning her next international vacation." image={require('../images/team/priyanka.jpeg')}></TeamPicture>
          <TeamPicture name="Parthiv Chigurupati" about="Parthiv is currently a junior at Thomas Jefferson High School for Science and Technology. This is his first year serving as a member of the HackTJ committee. His responsibilities this year include maintaining the hackathon DevPost and preparing Internet access and technology, such as the hardware available for hackers, for the event. In addition to working on HackTJ 6.0, Parthiv works as a Sysadmin to ensure that TJ’s Intranet and web services are always in order. He is also currently completing two separate research endeavors through both TJ’s underclassmen research (JUMP) lab and the Naval Research Laboratory." image={require('../images/team/parthiv.jpeg')}></TeamPicture>
          <TeamPicture name="Kavya Parekh" about="Kavya is a senior at TJHSST and is working on branding and merchandise for HackTJ. She has worked on the HackTJ team for the last two years and shares a passion for computer science and biology. She is the Vice President of Coding Lady Colonials and has done two years of continuing research at the National Institutes of Health. In her free time, she can be found watching Hasan Minhaj, drawing, or telling her friends corny jokes. After participating in or organizing HackTJ for all of her previous years at TJ, Kavya is looking forward to an amazing HackTJ 6.0!" image={require('../images/team/kavya.jpeg')}></TeamPicture>
          <TeamPicture name="Sanjana Meduri" about="Sanjana is a junior at TJ and is in charge of organizing workshops and making the HackTJ Judging App. She is passionate about CS and ultimately hopes to work in artificial intelligence when she grows up. She is the Internal Affairs Officer of Coding Lady Colonials, where she gives lectures about different CS topics and works to motivate women in CS. Sanjana is also an avid debater as the teaching coordinator for the TJ Public Forum Debate Team, and she is the historian for TJ Namaste. Outside of school, Sanjana spends almost all of her free time dancing." image={require('../images/team/sanjana.jpeg')}></TeamPicture>
          <TeamPicture name="Megan Dass" about="Megan Dass is a junior at TJ and is in charge of social media and workshops for HackTJ 6.0. Megan is intrigued by computer science and she is currently taking classes like artificial intelligence and computer vision to complement her interest. She is also part of student government, class council, the CyberPatriot team, and the Lincoln-Douglas Debate team. She has a passion to promote STEM in girls, which is why she is the co-founder of the CyberPatriot club at her school. Outside of school, Megan enjoys cooking and watching TV." image={require('../images/team/megan.jpeg')}></TeamPicture>
          <TeamPicture name="Alison Duan" about="Alison is a senior on the HackTJ 6.0 Team and is currently in charge of creating the branding for all of the HackTJ merchandise and works to plan and secure informative workshops with mentors who are professionals in their fields. Outside of HackTJ, Alison works as an Internal Affairs Officer for Coding Lady Colonials, the organization at TJ that promotes coding for women and partners with HackTJ. She is also the Engineering Committee Chair for WISE (Women In Science and Engineering) and helps create labs and interactive projects as part of an outreach initiative for girls in elementary schools." image={require('../images/team/alison.jpeg')}></TeamPicture>
          <TeamPicture name="Nuha Mohammed" about="Nuha Mohammed is a sophomore at Thomas Jefferson High School for Science and Technology and serves for HackTJ 6.0. Nuha is an ardent computer scientist, undertaking various projects in machine learning and software development. Additionally, she frequently challenges herself by competing in a wide range of computing contests. She is also an officer of TJ’s Coding Lady Colonials Club where she promotes girls’ engagement in computing through many interactive lessons. When she is not coding, Nuha enjoys watching the TV show Cutthroat Kitchen and loves baking and experimenting with new desserts!" image={require('../images/team/nuha.jpeg')}></TeamPicture>
          <TeamPicture name="Mr. Dan Tra" about="Mr. Tra is a computer science teacher at Thomas Jefferson High School for Science and Technology and a teacher sponsor for HackTJ." image={require('../images/team/tra.jpeg')}></TeamPicture>
          <TeamPicture name="Ms. Ria Galanos" about="Ms. Galanos is a computer science teacher at Thomas Jefferson High School for Science and Technology and a teacher sponsor for HackTJ." image={require('../images/team/galanos.jpeg')}></TeamPicture>
        </div>
      </div>
    </section>
    <a className="anchor" id="map"></a>
    <section className="green map">
      <RoadMap/>
    </section>*/
    }
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
