import { useEffect, useState } from 'react';
import './App.css';
import { arr, getDuration, getRow } from './helper';

function App() {
  const [tableData, setableData] = useState<Array<ItableData>>(arr);
  const firstTableRow = tableData[0];
  const headers = Object.keys(firstTableRow);

  useEffect(() => {
    try {
      const getData = async () => {
        const result = await fetch('https://api.emis.am/test');
        // const json = await result.json();
      }
      getData();
    } catch (e) {
      console.log(e);
    }
  }, []);

  const onHandleAddDuration = () => {
    const newState = tableData.map(item => {
      const duration = getDuration(item);
      return {
        ...item,
        duration
      }
    });

    setableData(newState);
  }

  const onHandleAddsalary = () => {
    const newState = tableData.map((item: ItableData) => {
      const salary = item.duration ? item.duration * item.oneDaySalary:item.duration;
      console.log({...item})
      return {
        ...item,
        salary
      }
    })
    setableData(newState);
  }


  const setData = async () => {
    try {
      const salaries = tableData.map(item => {
        return {
          id: item.id,
          salary: item.salary
        }
      })

      await fetch('https://api.emis.am/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(salaries)
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>

      <div>
        <table border={1}>
          <tr>
            {
              headers.map((header) => {
                return <th key={header}>
                  {header}
                </th>
              })
            }
          </tr>
          {
            tableData.map((item: ItableData) => {
              return <tr key={item.id}>
                {getRow(item, headers)}
              </tr>
            })
          }
        </table>
      </div>  

      <div>
        <button
          disabled={!!firstTableRow.duration}
          onClick={onHandleAddDuration}>
          add duration
        </button>
        <button
          disabled={!firstTableRow.duration || !!firstTableRow.salary}
          onClick={onHandleAddsalary}>
          add salary
        </button>
        <button
          disabled={!firstTableRow.salary}
          onClick={() => setData()}
        >
          post
        </button>
      </div>

    </div>
  );
}


export default App;
