
const Hero = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h6>It is {props.time} 0 Clock</h6>
            <div className="hero-bg">
                <div className="hero-text">
                    <h1>Here is Hero Area</h1>
                </div>
                <div className="hero-img">
                    <img src="https://www.designarc.biz/demos/buildnox/assets/images/resource/image-1.jpg" alt="" />
                </div>
            </div>
            <ul>
                <li>Name:{props.item['name']}</li>
                <li>Age:{props.item['age']}</li>
                <li>City:{props.item['city']}</li>
            </ul>
        </div>
    );
};  

export default Hero;