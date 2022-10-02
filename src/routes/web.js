import { createBrowserRouter } from "react-router-dom"
import About from "../views/About"
import DetailAbout from "../views/DetailAbout"
// import Home from "../views/App"
import App from "../views/App"
import Home from "../views/parent_views/Home/Home"
import Welcome from "../views/child_views/Home/Welcome/Welcome"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        children: [
            {
                index: true,
                element: <Welcome/>
            }

        ]
    },
    {
        path: '/about',
        element: <About/>,
        children: [
            {
                path: ':aboutSlug',
                element: <DetailAbout/>,
                loader: async ({params}) => {
                    if(params.aboutSlug){
                        return {
                            msg: params.aboutSlug
                        }
                    }
                }
            }
        ]
    }
])