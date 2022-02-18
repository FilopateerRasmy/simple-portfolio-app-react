import React from "react";
import ProgressClassComponent from "../shared/progressbar";
import './SkillsClass.css'

class SkillsClass extends React.Component {
    constructor() {
        super()
    }

    arr =['javascript', 'angular', 'node js', 'mongo']
    arrOfSkills =[
        {
            id:1,
        name:'javascript',
        proficiency:95
    }, 
        {
            id:2,
        name:'react',
        proficiency:90
    }, 
        {id:3,
        name:'angular',
        proficiency:98
    }, 
        {
            id:4,
        name:'node',
        proficiency:92
    }, 
        {
            id:5,
        name:'mongo',
        proficiency:92
    }, 
]
    


    render() {
        return (
            <>
                <div className="skills py-4">
                    <div className="container text-center">
                        <h2 className="text-white">Skills</h2>
                        <p className="text-center">There are many variations of passages of Lorem Ipsum available,
                             but the majority have suffered alteration in some form, by injected humour, 
                             or randomised words which don't look even slightly believable. 
                             or randomised words which don't look even slightly believable. 
                             If you are going to use a passage of Lorem Ipsum,</p>

                             <div className="row">
                                <div className="col-md-6">
                                    <h3>My Focus</h3>
                                    <div className="w-25 bg-white break">
                                    </div>
                                    
                                    {this.arr.map(el => <h3 key={el}>{el}</h3>)}
                                  

                                </div>
                                <div className="col-md-6 mt-4">

                             {this.arrOfSkills.map(sk => <ProgressClassComponent skills={sk.proficiency} skillName={sk.name} key={sk.id}/>)}   

                                </div>
                             </div>
                    </div>

                </div>




            </>
        )
    }
}

export default SkillsClass;


