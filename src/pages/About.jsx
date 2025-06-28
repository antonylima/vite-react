import React, {useEffect} from "react"
const About = ({name})=>{
      const url = new URL(window.location.href)
    const sp = url.searchParams
    useEffect(()=>console.log(
        sp.get('id'),
        '\n',
        sp.get('nm'),
        '\n',
        '100'

        //window.location.search

    )
)
    const p = sp.get('nm')
    var fn = "Sulivando Lima"
    //useEffect(()=>console.log("about"))
    return(
        <h1>About {p}</h1>
    )
}

export default About;