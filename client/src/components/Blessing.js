import React from 'react';

import { useLocation } from 'react-router-dom';

import '../App.css'

const Blessing = ({ route }) => {



  const location = useLocation();

  const otherOption = () => {
    index++
    if (index > blessingData.length)
      index = 0;


  }



  let index = 0;
  const receivedData = location.state?.data.parameters;
  const blessingData = location.state?.data.blessingList;

  return (

    <div>

      <h2>הברכה המושלמת בשבילך</h2>

      <span> גיל:{receivedData?.age} </span>   |

      <span> אורך:{receivedData?.length} </span>   |

      <span>מין: {receivedData?.gender}</span>   |

      <span>שם המקבל: {receivedData?.nameReceiver}</span>   |

      <span>שם הנותן: {receivedData?.nameGiver}</span>   |

      <span>אוירה: {receivedData?.atmosphere}</span>   |

      <span>הארוע: {receivedData?.event}</span>

      <p>הברכה:
        {blessingData[index]}
      </p>

      <button onClick={otherOption}>אני רוצה משהו אחר</button>

    </div>

  );

};



export default Blessing;