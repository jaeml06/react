
import './App.css';

function AppProfile() {
  const name = '엘리';
  const list = ['우유','딸기','바나나', '요거트'];
  return (
    <>
      <h1 className='orange'>{`Hello! ${name}`}</h1>
      <h2>hello!</h2>
        <ul>
          {
            list.map((item)=>(
              <li>{item}</li>
            ))
          }
        </ul>
        <img
        style={{width:'200px' , height: '200px'}}
        src="https://s3.marpple.co/files/u_218933/2020/1/original/14474423ccd1acb63fab43dc936ab01302c64b547577e2e.png"
        />
    </>
  );
  
}

export default AppProfile;
