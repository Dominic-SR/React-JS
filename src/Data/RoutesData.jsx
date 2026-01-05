export const RoutesData = [
    {
        name:"Hooks",
        path:"/",
        sub:[
            {
                name:"Use State",
                sub:[
                    {
                        name:"Counter",
                        to:"usestate_counter"
                    },
                    {
                        name:"Add to Card",
                        to:"usestate_addtocard"
                    }
                ]
            },
            {
                name:"Use Reducer",
                sub:[
                    {
                        name:"Task Management",
                        to:"usereducer_taskmanagement"
                    }
                ]
            },
            {
                name:"Use Effect",
                sub:[
                    {
                        name:"Timer",
                        to:"useeffect_timer"
                    },
                    {
                        name:"UseEffect Counter",
                        to:"useeffect_counter"
                    },
                    {
                        name:"UeEffect Github Users List",
                        to:"useeffect_githubusers"
                    }

                ]
            },
            {
                name:"Use CallBack",
                sub:[
                    {
                        name:"Button Click Mount",
                        to:"usecallback_buttonclickmount"
                    }
                ]
            },
            
        ]
    }
]