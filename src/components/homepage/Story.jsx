import React from 'react'

const Story = () => {
  return (
    <>
     <section className="py-10 bg-gray-50 sm:py-16 lg:py-24 mt-14">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Numbers tell our story</h2>
                <p className="mt-3 text-md leading-6 lg:leading-relaxed lg:text-xl text-gray-600 md:mt-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
            </div>

            <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
                <StoryCard 
                    number="17+"
                    title="Years of experience"
                    desc="Creating the successful path"
                />
                <StoryCard 
                    number="2000+"
                    title="Experienced Students"
                    desc="In last 17 years"
                />
                <StoryCard 
                    number="5+"
                    title="Team Members"
                    desc="Working for your success"
                />
            </div>
        </div>
     </section>
    </>
  )
}

const StoryCard = ({number , title , desc}) => {
    return (
        <> 
            <div>
                <h3 className="font-bold text-7xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> {number} </span>
                </h3>
                <p className="mt-4 text-xl font-medium text-gray-900">{title}</p>
                <p className="text-base mt-0.5 text-gray-500">{desc}</p>
            </div>
        </>
    )
}

export {StoryCard}
export default Story