import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
export function App() {

    const users=[
        {
            userName:'Daniel_Bleach16',
            name:'Daniel P',
            initialIsFollowing:true
        },
        {
            userName:'mia-khalifa',
            name:'Mia',
            initialIsFollowing:false
        },
        {
            userName:'ichigo',
            name:'Ichigo',
            initialIsFollowing:false
        },
        {
            userName:'illojuan',
            name:'Illojuan',
            initialIsFollowing:true
        },
        {
            userName:'mapube93',
            name:'Marcela',
            initialIsFollowing:true
        },
        {
            userName:'florecita_rockera',
            name:'Flor',
            initialIsFollowing:true
        },
        {
            userName:'Laseguraoficial4697',
            name:'La Segura',
            initialIsFollowing:true
        },
    ]
    const danielP = { initialIsFollowing: true, userName: 'Daniel_Bleach16' }
    return (
        <>
            <section>
                {/* <TwitterFollowCard {...danielP} >
                    Daniel P
                </TwitterFollowCard>
                <TwitterFollowCard initialIsFollowing={false} userName="mia-khalifa" >
                    Mia
                </TwitterFollowCard>
                <TwitterFollowCard initialIsFollowing={false} userName="ichigo" >
                    Kait Wild
                </TwitterFollowCard>
                <TwitterFollowCard initialIsFollowing userName="illojuan" >
                    IlloJuan
                </TwitterFollowCard> */}
                {
                    users.map(user=>{
                        const{userName,name,initialIsFollowing}=user
                        return(
                            <TwitterFollowCard 
                            key={userName}
                            userName={userName}
                            initialIsFollowing={initialIsFollowing}>
                                {name}
                            </TwitterFollowCard>
                            
                        )
                    })
                }
            </section>

        </>

    )

}