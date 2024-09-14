import React from 'react'
import { useThemeContext } from '../../context/themeContext'
// import photo from '../../asset/photo.jpg'

const ImageIntro = () => {

    const { pageTheme } = useThemeContext()

    return (
        <section className={`about-section ${pageTheme}`}>
            <div>
                {/* <img src={photo} alt="...." /> */}
            </div>
            <div >
                <h2>Hello, I'm Oladokun!</h2>
                <p>Welcome to my portfolio! I'm a dedicated Front-End Developer with expertise in HTML, CSS, JavaScript, React, and more. I'm passionate about transforming ideas into interactive, user-friendly websites. My goal is to craft solutions that are not only functional but also visually engaging and intuitive.
                </p>
            </div>
        </section>
    )
}

export default ImageIntro
