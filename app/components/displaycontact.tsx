import { Displaytype, contactType } from "./Types/type";

export default function DisplayContact(props:{contactInfo:contactType[]}){
   
    return (
        <div>
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2" style={{backgroundColor:"pink"}}><b>Name</b></th>
                <th className="border border-gray-300 px-4 py-2" style={{backgroundColor:"pink"}}><b>Email</b></th>
                <th className="border border-gray-300 px-4 py-2" style={{backgroundColor:"pink"}}><b>Message</b></th>
              </tr>
            </thead>
            <tbody>
              {props.contactInfo.map((item, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2" >{item.name}</td>
                  <td className="border border-gray-300 px-4 py-2" >{item.email}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.message}</td>
                   </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };
   