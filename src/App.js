import React from "react";
import Row from "./Components/Row";
import Sdata from "./Components/Sdata";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";



const App=()=>{
    return(
        <>
        <table id="dtBasicExample" className="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
  <thead>
    <tr>
      <th className="th-sm">Title
      </th>
      <th className="th-sm">Release Year
      </th>
      <th className="th-sm">Locations
      </th>
      <th className="th-sm">Fun Facts
      </th>
      <th className="th-sm">Production Company
      </th>
      <th className="th-sm">Distributor
      </th>
      <th className="th-sm">Director
      </th>
      <th className="th-sm">Writer
      </th>
      <th className="th-sm">Actor 1
      </th>
      <th className="th-sm">Actor 2
      </th>
      <th className="th-sm">Actor 3
      </th>
    </tr>
  </thead>

  <tbody>
    {
        Sdata.map((val,ind)=>{
            return <Row key={ind}
            title={val.title}
            release_year={val.release_year}
            locations={val.locations}
            fun_facts={val.fun_facts}
            production_company={val.prodection_company}
            distributor={val.distributor}
            director={val.director}
            writer={val.writer}
            actor_1={val.actor_1}
            actor_2={val.actor_2}
            actor_3={val.actor_3} />
        })
    }
  </tbody>

  <tfoot>
    <tr>
      <th className="th-sm">Title
      </th>
      <th className="th-sm">Release Year
      </th>
      <th className="th-sm">Locations
      </th>
      <th className="th-sm">Fun Facts
      </th>
      <th className="th-sm">Production Company
      </th>
      <th className="th-sm">Distributor
      </th>
      <th className="th-sm">Director
      </th>
      <th className="th-sm">Writer
      </th>
      <th className="th-sm">Actor 1
      </th>
      <th className="th-sm">Actor 2
      </th>
      <th className="th-sm">Actor 3
      </th>
    </tr>
  </tfoot>
  </table>
        </>
    )
}

export default App;