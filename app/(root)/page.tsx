
import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: 'Mahaveer', lastName: 'Hirawat', email: 'mahaveerhirawat10@gmail.com' };
    return (
        <section className="home">
            <div className="home-content">
                
                <header className="home-header">
                    <HeaderBox
                       type="greeting"
                       title="Welcome"
                       user={loggedIn?.firstName || 'Guest'}
                       subtext="Access and manage your account and transactions efficiently."

                     />


                     <TotalBalanceBox
                     accounts={[]}
                     totalBanks={1}
                     totalCurrentBalance={1259.45}
                     
                     />
                </header>
                RECENT TRANSACTIONS
            </div>
            <RightSidebar
                user={loggedIn}
                transactions={[]}
                banks={[{currentBalance:200.45}, {currentBalance:560.65}]}
                 
            
            />

        
        </section>
        
    )
}

export default Home
