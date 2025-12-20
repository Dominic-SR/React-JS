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
                    }
                ]
            },
            
        ]
    }
]