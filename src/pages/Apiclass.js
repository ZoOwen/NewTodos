import React from 'react'

export default class Apiclass extends React.Component {
   
    state = {
        data : []
    }
    componentDidMount(){
        const APP_KEY = "fd27e53709193f681dca48269b2870ee";
        const APP_ID = "f1226e92";
        const x = "https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}";
        
        const urlFetch = fetch('https://jsonplaceholder.typicode.com/todos')
        urlFetch.then( res => {
           if(res.status === 200)
              return res.json()   
        }).then( resJson => {
           this.setState({
               data: resJson
           })
        })
     }

    render(){
        console.log(this.state.data)
        return (
            <div>
                <p>Hello API CLASS</p>

                {this.state.data.map((item, index) => (
                    
                    <li key="id">{item.id}. {item.title}</li> 
                      
                   
                  ))}
          
            </div>
        )
    }
}
