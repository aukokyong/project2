const codeToName = (props) => {
  let busstopnameArr = [];
  for (let i = 0; i < props.busstopcode.length; i++) {
    for (let j = 0; j < props.databusstop.length; j++) {
      let code = props.busstopcode;
      let info = props.databusstop;
      if (code[i] === info[j].BusStopCode) {
        busstopnameArr.push({
          BusStopCode: code[i],
          Description: info[j].Description,
        });
      }
    }
  }
  //   console.log(busstopnameArr);
  return busstopnameArr;
};

const ListBusStop = (props) => {
  let busStop = codeToName(props);
  //   console.log(busStop);

  if (props.isselectvalid === false) {
    return <option>No Entry</option>;
  } else {
    return (
      <>
        {busStop.map((x, index) => (
          <option key={index} value={x.BusStopCode}>
            {x.Description}
          </option>
        ))}
      </>
    );
  }
};

export default ListBusStop;
