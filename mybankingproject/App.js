import React, {Component} from 'react';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            items:[],
            isLoaded: false
        };
    }

    componentDidMount(){
      fetch('https://www.hatchways.io/api/assessment/students')
          .then(res=> res.json())
          .then(({ students }) => {
              this.setState({
                  isLoaded: true,
                  items: students,
              })
          });
  }

    render(){
        const {isLoaded, items} = this.state;
        if(!isLoaded){
            return <div>loading data...</div>;
        }

        else{

            return(
                <div className="Data">
                    <div>
                        {items.map(item=>(
                            <p key={item.id}>
                                 name:{item.firstName +' '+ item.lastName +' '} |
                                 City:{item.city} |
                                 company:{item.company} |
                                 email:{item.email} |
                                 id:{item.id}|
                                 picture:{item.pic}

                            </p>

                        ))};
                    </div>



                </div>

            );
        }

    }

}
