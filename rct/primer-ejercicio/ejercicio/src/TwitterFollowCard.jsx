import { useState } from 'react'

export function TwitterFollowCard({ userName = '#', children/*name*/, initialIsFollowing }) {
    const [isFollowing, serIsFollowing] = useState(initialIsFollowing)

    /* const imageSrc = 'https://unavatar.io/twitter/${userName}'; */
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    const handleClick = () => {
        serIsFollowing(!isFollowing)
    }
    const sigueClassName = isFollowing ? 'tw-followCard-sigue is-following' : 'tw-followCard-sigue'
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
                <span className={sigueClassName}>
                    Te sigue
                </span>
            </aside>
            <aside>

                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text} </span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span></button>
            </aside>
        </article>
    );
}
