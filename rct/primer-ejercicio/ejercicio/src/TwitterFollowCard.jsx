import { useState } from 'react'

export function TwitterFollowCard({ userName = '#', children/*name*/}) {
    const [isFollowing, serIsFollowing] = useState(false)

    /* const imageSrc = 'https://unavatar.io/twitter/${userName}'; */
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    const handleClick = () => {
        serIsFollowing(!isFollowing)
    }
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    /* src={imageSrc} */
                    src={`https://unavatar.io/${userName}`}
                    alt='Avatar de usuario'
                />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-userName'>@{userName}</span>
                </div>
            </header>
            <aside>

                <button className={buttonClassName} onClick={handleClick}>{text}</button>
            </aside>
        </article>
    );
}
