import { Icon } from 'semantic-ui-react'

const Home = () => {
    

    return (
        <>
            <div className="page">
                <section className="padded p--b p--t landing f f--col f--j-space">
                    <h1 className="landing__title">Nature at its best</h1>
                    <div className="f f--j-center f--a-center">
                        <p className="landing__info m--r-s">scroll</p>
                        <Icon size="large" className="block landing__icon" name="hand point down outline" />
                    </div>
                    
                </section>

            </div>
        </>
    )
}

export default Home;
