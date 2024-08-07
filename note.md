# LEC_ 8

## Class  based component 

-It is nothing but the js class that extned  React.component class and return some part of jsx by unding render (){} function 

###  we can accept the props and use in jsx like this in the class based componenet  , 

```javascript
class UserClass extends React.Component{
    constructor(props){
        super(props);
    
    }
    
    render(){
let { name } = this.props;

        return(
            <div>
                  <h1> Name : {name}</h1>
                  <h1> Name : {this.props.name}</h1>
               
            </div>
        )
    }
}
```


###  creating state varialbe and updating it in class based component , 


```javascript
class UserClass extends React.Component{
    constructor(props){
        super(props);
    
    }
    
    render(){
let { count2 } = this.state;

        return(
            <div>
                <h1> Count : {this.state.count}</h1>
            <h1> Count : {count2}</h1>
            <button onClick={()=> {

                this.setState({
                    count : this.state.count +1 , 
                    count2 : this.state.count2 +1  ,
                    //   count : ++count   , // increment is not working    post not pre working
                })
            }}>Increase COunts </button>
               
            </div>
        )
    }
}
```




 ```javascript
// Loading a calss bsed component is like crating a instance of as  class 

<!--  whenever the class load weare creating an instace of the calss ,  ---> the first thing  that is called is constructor   then render  -->
 <!-- parent constructor --> pareant  render --> child constsructor --> child render ()  -->

constructor ()  
render ()
componentDidMount()

1.parent construcotr
2. paranet render 
3.child construcor 
4.render render
5.children Component didMount
6.parent Component didMount





// Parent Constructor
// Parent Render
// FirstChitd Constructor
// FirstChitd Render
// SecondChitd Constructor
// SecondChitd Render
// FirstChild Component Did Mount
// SecondChitd Component Did Mount
// Parent Component Did Mouqt

// debugger 

//  use effect , dependencies array is absebt , then re render at every time or every update 


//  use cam useeffect multiple time in our code 
//  in useeffect if we are returing a afunction that function is ruuned when the component is un mounted 

 ```


## LEC- 9 
 
#### creating a  coustom hook , the soustom should be created innside utils folder , staring the name of the hook from use , becauses then rect understand that is is an hook if we start the name of the coustom hook with 'use' ,but it is not mandatory to write use , but for good practice , also the library recommended . 
 

 #### cosutom hooks are same as componets instead they retrun some usefull stuff that we want , use can use usestate use effect adn all in coustom hook 

 ### we will make smaller bundles of all this files -- and this process is known as chunking  or codeSplitting /Dynamic bundling  / Lazy Loading / Ondeamand Loading / Dynamic  import

 ### by deafult hume yek hii budle milta hai on browser , like sab kuch yusme budle rahta hai , but agar hume alag bundle me banana hai like yaise kuch jo yus component par jayege tab hii vo budle load ho 

  - Yuske liye hum use karte  hai lazy() from named import given by react
-   const Grocery = lazy(()=>import('path of the component' ))
-   this error is caused  component suspended while responding to synchronous input , because the Grocery js is not loder yes in the broweser and the react rendering the grocery component 
-   <Suspense fallback={<h1>Grocery is loading</h1>}>
                    <Grocery/></Suspense> 