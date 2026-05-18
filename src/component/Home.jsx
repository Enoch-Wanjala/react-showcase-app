import style from './Home.module.css';

// this is  our Home component
// receives namd and description as props
function Home({name, description}) {
    
    return (
        <>
        <div className={style.homeContainer}>
            <h1 className={style.homeTitle}>{name}</h1>
            <p className={style.homeDescription}>{description}</p>
        </div>
        </>
    )

}

export default Home;
