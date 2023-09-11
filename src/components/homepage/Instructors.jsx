import React from 'react'
import member1 from '../../images/member1-new.jpg'
import member2 from '../../images/member2-new.jpg'
import member3 from '../../images/member3-new.jpg'
import '../../App.css'

const Instructors = () => {
  return (
    <>
        <div id='instructors' className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12 xl:px-32">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">Our Instructors</h2>
                    <p className="text-gray-600 lg:w-8/12 lg:mx-auto">Tailus prides itself not only on award-winning technology, but also on the talent of its people of some of the brightest minds and most experienced executives in business.</p>
                </div>
                <div className="grid gap-12 items-center md:grid-cols-3">
                    <InstructorsCard 
                    name="Mahendra Bhurtel"
                    position = "CEO & Lecturer"
                    // desc="Experienced Computer learning teacher and enthusiastic developer"
                    member = {member1}
                    />
                    <InstructorsCard 
                    name="Kamala Acharya Bhurtel"
                    position = "Accountant"
                    // desc="Experienced Computer learning teacher and enthusiastic developer"
                    member = {member2}
                    />
                    <InstructorsCard 
                    name="Sapana Magar"
                    position = "Lab Assistant"
                    // desc="Experienced Computer learning teacher and enthusiastic developer"
                    member = {member3}
                    />
                    <InstructorsCard 
                    name="Manish Bhurtel"
                    position = "Web Developer"
                    // desc="Professional Full Stack Web Developer and UI/UX designer"
                    member = {member3}
                    />
                </div>
            </div>
        </div>
    </>
  )
}

const InstructorsCard = ({name , position , member}) => {
    return (
        <>
                    <div className="space-y-4 text-center">
                        <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                            src={member} alt="woman" loading="lazy" width="640" height="805" />
                        <div>
                            <h4 className="text-2xl">{name}</h4>
                            <span className="block text-sm text-gray-500">{position}</span>
                        </div>
                    </div>
        </>
    )
 
}

export { InstructorsCard }
export default Instructors