export function TwitterFollowCard({userName,name,isFollowing}){
  /* const imageSrc ='https://unavatar.io/twitter/${userName}' */
    return(  
    <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' 
                /* src={imageSrc}  */
                src={'https://unavatar.io/twitter/${userName}'}
                alt="Avatar de usuario"/>
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-userName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
    </article>
  )
}