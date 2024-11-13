import React from 'react'

const Card = ({username = "Manan Maheshwari", post = "Student", imageAdd = "https://avatars.githubusercontent.com/u/115884239?v=4"}) => {
    // console.log(props);
    return (
        <div>
            <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                <img className="w-24 h-24 rounded-full mx-auto" src={imageAdd} alt="" width="384" height="512"></img>
                <div className="pt-6 space-y-4">
                    <blockquote>
                        <p className="text-lg">
                            “Tailwind CSS is the only framework that I've seen scale
                            on large teams. It’s easy to customize, adapts to any design,
                            and the build size is tiny.”
                        </p>
                    </blockquote>
                    <figcaption>
                        <div>
                            {username}
                        </div>
                        <div>
                            {post}
                        </div>
                    </figcaption>
                </div>
            </figure>
        </div>
    )
}

export default Card
