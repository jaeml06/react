export default function personReducer(person, action){
    switch(action.type){
        case 'updated':{
            const {prev, current} =action;// const prev = action.prev; const current = action.current;
            return{
                ...person,
                mentors: person.mentors.map((mentor) => {
                    if (mentor.name === prev) {
                        return { ...mentor, name: current };
                    }
                    return mentor;
                }),
            };   
        }
        case 'added':{
            const {name, title} = action
            return{
                ...person,
                mentors: [...person.mentors, { name, title }], // 뒤에 추가
                //mentors: [{ name, title }, ...person.mentors], 앞에 추가
            };
        }
        case 'deleted':{
            return{
                ...person,
                mentors: person.mentors.filter((m) => m.name !== action.name),
                
            };
        }
        default : {
            throw Error(`알 수 없는 액션 타입이다: ${action.type}`);
        }
    }
}