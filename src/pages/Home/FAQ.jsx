import React, { useState } from 'react';
import bg from '../../assets/images/bg/faq.png'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = [
    {
      question: 'What types of dance classes do you offer?',
      answer: 'We offer a wide range of dance classes including ballet, jazz, hip-hop, contemporary, tap, and more. Our classes cater to all age groups and skill levels.'
    },
    {
      question: 'Do I need any prior dance experience to join your classes?',
      answer: 'No, our classes are designed for dancers of all levels, from beginners to advanced. Our experienced instructors will guide you through the learning process at your own pace.'
    },
    {
      question: 'How do I enroll in a dance class?',
      answer: 'To enroll in a dance class, simply visit our website and navigate to the "Classes" section. Select the desired class, fill out the enrollment form, and make the payment to secure your spot.'
    },
    {
      question: 'What should I wear to dance class?',
      answer: 'We recommend wearing comfortable, form-fitting dancewear such as leotards, tights, leggings, or dance shorts. Additionally, proper dance shoes specific to the dance style are necessary for effective learning and safety.'
    },
    {
      question: 'Are there any age restrictions for your dance classes?',
      answer: 'We offer dance classes for students of all ages, starting from toddlers to adults. Our classes are divided into different age groups to ensure age-appropriate learning and instruction.'
    },
    {
      question: 'Do you offer trial classes?',
      answer: 'Yes, we offer trial classes for new students to experience our dance classes before making a commitment. Please contact us to schedule a trial class and check for availability.'
    },
    {
      question: 'Can I participate in recitals and performances?',
      answer: 'Absolutely! We organize annual recitals and performances where students have the opportunity to showcase their talent and hard work. Participation is optional, but highly encouraged.'
    },
    {
      question: 'Are your instructors qualified and experienced?',
      answer: 'Yes, our instructors are highly qualified and experienced in their respective dance styles. They have a passion for teaching and are dedicated to helping students develop their skills and reach their dance goals.'
    },
    {
      question: 'Is there a dress code for dance classes?',
      answer: 'While there is no strict dress code for regular dance classes, we encourage students to dress appropriately and comfortably to allow freedom of movement. However, for performances and rehearsals, specific costumes or dress codes may apply.'
    },
    {
      question: 'What is your class cancellation policy?',
      answer: 'If you need to cancel a class, please notify us in advance. Depending on the circumstances, we may provide a makeup class or credit for future classes. Please refer to our cancellation policy for more details.'
    },
  ];
  

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="container ">

<h1 className='uppercase text-center font-eczar sm:text-5xl text-2xl py-24  dark:text-white text-[#9956C1]'>Frequently Asked Questions</h1>



<div className="flex items-center gap-5 flex-col-reverse md:flex-row">
<div className="max-w-md mx-auto">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-b py-3 cursor-pointer"
          onClick={() => toggleAccordion(index)}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium dark:text-white">{faq.question}</h3>
            <svg
              className={`w-6 h-6 transition-transform transform ${
                index === activeIndex ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {index === activeIndex && (
            <p className="mt-2 text-gray-600 dark:text-gray-300">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>

    <img src={bg} alt="" />
</div>


    </div>
  );
};

export default FAQ;
