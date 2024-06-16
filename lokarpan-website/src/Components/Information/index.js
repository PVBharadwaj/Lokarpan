import { Component } from "react";
import KithNavbar from "../Navbar/KithNavbar/index";
import KithInfoSubNavbar from "../Navbar/KithInfoSubNavbar/index";
import KithFooter from "../KithFooter/index";
import "./index.css";

const questions = [
  {
    id: 1,
    question: "How Do I Apply For Admission To Kith School?",
    answer:
      "For admission to Kith n Kin School, all applications must be submitted either through our admissions portal or in person at the admissions office. If you're not yet prepared to apply, you can register your interest to receive updates on our website. Click here to begin your application or to register your interest.",
  },
  {
    id: 2,
    question:
      "How Many Students Are At Kith School And What Is The Average Class Size?",
    answer:
      "Kith typically has 565 students in total. It varies according to age and subject, but it is usually between twenty and thirty five students per class.",
  },
  {
    id: 3,
    question: "Which Countries Are Represented Among Kith School Students?",
    answer: "Recent students at Kith School hail from India.",
  },
  {
    id: 4,
    question: "Can I book a tour or visit the campus?",
    answer:
      "You can contact us by email or on the telephone numbers below. Lines are manned between 8:30am and 5:30pm IST during term time.<br />support@lokarpan.com<br />+91 9839 024093 <br />+91 8936 973584",
  },
  {
    id: 5,
    question: "Is Kith School Accredited?",
    answer:
      "Kith is accredited by the Uttar Pradesh State Board, which was established in 1921 in Prayagraj by an Act of the United Provinces Legislative Council. Presently, the Board stands as the largest examining body globally.",
  },
  {
    id: 6,
    question: "What Is The Curriculum Offered At Kith School?",
    answer:
      "At Kith, our curriculum epitomises excellence, drawing on cutting-edge educational research to deliver a rigorous and globally relevant learning experience. Aligned with State Board standards, our program ensures students receive a high-quality education that fosters critical thinking, creativity, and a nuanced understanding of diverse perspectives. We equip our students with the skills and knowledge needed to excel in today's dynamic global landscape.",
  },
  {
    id: 7,
    question:
      "What Extracurricular Opportunities Are Available At Kith School?",
    answer:
      'At Kith, students immerse themselves in a diverse range of extracurricular activities designed to nurture their artistic talents and personal growth. From music to dance to visual arts, our offerings span classroom instruction, weekend courses, performance ensembles, and private lessons facilitated by our esteemed international faculty. Participation in activities such as band, choir, dance, painting, digital arts, model making, business classes, photography, Indian music, and private instruction is determined through a placement audition, ensuring alignment with each student\'s abilities and schedule.<br/>While some courses require auditions, many are open to all students, fostering a culture of inclusivity and exploration. Compulsory classroom courses, essential for building a foundational understanding of liberal arts, are provided from PG to Grade 8. Additionally, optional courses like "Summer of Code" cater to Grades 7 through 12.<br/>Private instruction, highly sought after and competitive, follows a tiered allocation process, prioritising returning students, those with prior experience, and then beginners.',
  },
  {
    id: 8,
    question: "What Second Languages Does Kith School Offer?",
    answer:
      "At Kith, students have the opportunity to explore a variety of second languages, including Sanskrit, French, Spanish, and Hindi. Additionally, we provide comprehensive English programs to support students who require assistance with English proficiency.",
  },
  {
    id: 9,
    question:
      "What Is The Average Retention For Students And Staff At Kith School?",
    answer:
      "At Kith n Kin School, we're proud to boast an impressively high student retention rate. This means that many of our students stay with us throughout their academic journey, forming lasting bonds with classmates and staff members alike. This continuity not only fosters lifelong friendships but also allows students the time to fully embrace our educational philosophy and curriculum.<br/> In terms of staff, we have a mix of both long-serving educators and those who may spend two to four years with us. However, we're committed to encouraging the majority of our staff to stay for a minimum of five to six years. To support this commitment, we offer competitive salaries, contracts and benefit packages, along with opportunities for professional development.<br/>Additionally, we're fortunate to welcome a diverse group of international faculty, guest lecturers, and fellows who generously contribute their time and expertise to our school community. Their involvement enriches our academic environment and provides students with unique perspectives and experiences.",
  },
  {
    id: 10,
    question: "What Sports Does Kith School Offer?",
    answer:
      "Table tennis, badminton, swimming, gymnastics, athletics, cricket, cross-country, road running, field hockey, personal fitness, football (soccer), basketball and volleyball.",
  },
  {
    id: 11,
    question: "Does Kith Conduct And Participate In Inter-School Activities?",
    answer:
      "Kith students have a number of opportunities to interact with students from other schools in and around Malhausi, across India and internationally.",
  },
  {
    id: 12,
    question: "Which Grade Should I Apply For?",
    answer:
      "At Kith, we adhere to the age matrix recommended by the Government of India. We welcome parents and guardians to apply for admission for their children. You can view the age matrix by clicking here",
  },
  {
    id: 13,
    question: "What Health Care Facilities Does Kith Have?",
    answer:
      "At Kith n Kin School, our Health Centre is available to provide immediate assistance for basic ailments and minor injuries commonly encountered during school activities. Our facility is equipped to offer initial care and support to students in need.",
  },
  {
    id: 14,
    question:
      "Are There Any Special Arrangements For Children With Chronic Medical Conditions?",
    answer:
      "We recognise the life-threatening nature of certain medical conditions and their potential impact on a child's ability to learn. Our school's medical policy emphasises the importance of treating each child with a medical condition as an individual, acknowledging their unique needs. However, we currently lack specialised arrangements on school premises to support specific medical conditions that may require additional assistance.",
  },
];

class Information extends Component {
  render() {
    return (
      <>
        <KithNavbar />
        <KithInfoSubNavbar />
        <div className="information-container">
          <div className="information-upper-section">
            <div>
              <h1>Leadership</h1>
              <p>
                Through their complementary efforts, the Kith Leadership makes
                holistic decisions to shape the school's agenda, inquire into
                the quality and outcomes while ensuring that Kith remains true
                to its mission. Together they provide counsel and take specific
                responsibility for transforming the Kith n Kin School and the
                Centre of Excellence into world-class institutions.
              </p>
            </div>
            <img src="https://res.cloudinary.com/digbzwlfx/image/upload/v1707978452/Rectangle_1809_ke4omy.png" />
          </div>
          <div className="mobile-information-upper-section">
            <h1>Leadership</h1>
            <p>
              Through their complementary efforts, the Kith Leadership makes
              holistic decisions to shape the school's agenda, inquire into the
              quality and outcomes while ensuring that Kith remains true to its
              mission. Together they provide counsel and take specific
              responsibility for transforming the Kith n Kin School and the
              Centre of Excellence into world-class institutions.
            </p>
          </div>
          <ul className="information-list">
            <li>
              This responsibility ensures that the critical operational
              development and innovation portfolios, including technology apps,
              education standards and design, and infrastructure development for
              Kith, are planned and executed in line with Lokarpan's direction
              and connected strategies.
            </li>
          </ul>
          <div className="information-alumni-employment-section">
            <div className="information-employment-container info-space-above">
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1707978527/Rectangle_1809_1_tbt5nd.png"
                className="information-img"
              />
              <div className="information-employment-content">
                <h1>Employment</h1>
                <p className="inf-font-24">
                  Kith is an experimental school. Our mission is to help young
                  children navigate, progress and thrive in a world of change.
                  We rely on our integrated network of professionals and
                  specialised practices to champion meaningful progress in
                  education through creative, media, commerce, data and
                  technology.
                </p>
                <br />
                <p className="inf-font-24">
                  When you join us, you’ll be part of a global team that builds
                  purposeful solutions and strives to do meaningful work while
                  leaving a profound impact on communities.
                </p>
              </div>
            </div>
            <div className="information-alumni-container info-space-below">
              <div className="information-employment-content">
                <h1>Alumni</h1>
                <p className="inf-font-24">
                  Stay in touch with your former colleagues, find resources to
                  support your career, participate in promoting our efforts,
                  fund our initiatives, and take advantage of programs offered
                  exclusively to our alumni.
                </p>
              </div>
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1707978520/Rectangle_1810_1_kmcxec.png"
                className="information-img"
              />
            </div>
          </div>
          <div className="information-faqs-section">
            <h1>Frequently Asked Questions</h1>
            <ul className="info-questions-container">
              {questions.map((each) => (
                <li className="info-each-question">
                  <input
                    type="checkbox"
                    id={each.id}
                    name={each.id}
                    className="info-input"
                  />
                  <label htmlFor={each.id} className="info-question">
                    {each.question}
                  </label>
                  <div className="info-ans-sec">
                    <p className="info-faq-answer">{each.answer}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <KithFooter />
      </>
    );
  }
}

export default Information;
