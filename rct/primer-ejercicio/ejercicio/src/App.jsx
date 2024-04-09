import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
export function App() {

    const danielP={isFollowing:true,userName:'Daniel_Bleach16'}
    return (
        <>
            <TwitterFollowCard {...danielP} >
            Daniel P
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing={false} userName="daniel.pulagrin" >
            Daniel Pulgarin
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing={false} userName="kaitgonewild" >
            Kait Wild
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing userName="onlineinsane" >
            Insane Content
            </TwitterFollowCard>
        </>

    )

}