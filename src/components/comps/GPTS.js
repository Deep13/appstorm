import React, { useRef, useEffect, useState } from 'react'
import logoImage from '../../assets/appLogo_thumb (1).png';
import { FaPlus, FaImage, FaVideo } from "react-icons/fa";
import { RiSendPlane2Fill } from "react-icons/ri";
import { IoMdAttach } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { ThreeDots } from 'react-loader-spinner'
export default function GPTS() {
    const scrollableDivRef = useRef(null);
    const scrollToBottom = () => {
        if (scrollableDivRef.current) {
            setTimeout(() => {
                scrollableDivRef.current.scroll({
                    top: scrollableDivRef.current.scrollHeight + 1000,
                    behavior: "smooth",
                });
            }, 500)
        }
    };
    const { id } = useParams();
    const [chat, setchat] = useState([])
    const fileInputRef = useRef(null);
    const [replying, setreplying] = useState(false)
    const handleButtonClick = () => {
        fileInputRef.current.click();
    };
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Create a URL for the selected file
            const imageUrl = URL.createObjectURL(file);
            var message = document.getElementById('message').value;
            var aChat = [...chat];
            aChat.push({ msg: '', owner: 'user', type: 'image', url: imageUrl })
            setchat([...aChat]);
            document.getElementById('message').value = "";
            setreplying(true)
            setTimeout(() => {
                setreplying(false);
                if (message.indexOf('pic') !== -1) {
                    aChat.push({ owner: 'bot', type: 'image', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtj1Hz2NnOsGq-4w_pSTG6v5y8j63tcsEJfw&usqp=CAU' })
                }
                else if (message.indexOf('video') !== -1) {
                    aChat.push({ owner: 'bot', type: 'video', url: 'https://www.mantecsecuricor.com/wp-content/uploads/2023/08/Home-Page-Video.mp4' })
                }
                else {
                    aChat.push({ owner: 'bot', type: 'text', msg: 'Sorry I was not able to understand you' })
                }


                setchat([...aChat]);
            }, 2000)

        }
    };

    const [loading, setloading] = useState(true)
    useEffect(() => {
        scrollToBottom();
    }, [chat, loading]);

    useEffect(() => {

        if (id == 'new') {
            setchat([]);
        }
        else {
            setchat([{ msg: 'This feature is not available (on this device / in this context) for BLUETOOTH_SCAN react native', owner: 'user', type: 'text' }, {
                msg: `It seems like you're encountering an issue related to Bluetooth scanning in a React Native application. However, the information you provided is quite brief, and it's not clear what specific problem or error you're facing.
            If you're developing a React Native application and trying to implement Bluetooth scanning, here are a few general steps and considerations you might find helpful:`, owner: 'bot', type: 'image', url: 'https://d3o23lul7dx07b.cloudfront.net/app_f341e7e34e74ebb4.png'
            }, { msg: 'i am using PermissionsAndroid but getting the above error', owner: 'user', type: 'text' }, { msg: `If you're using PermissionsAndroid for Bluetooth scanning in a React Native application and encountering an error, there are a few things you can check and adjust. Below are some steps to troubleshoot the issue:`, owner: 'bot', type: 'text' }, { msg: 'This feature is not available (on this device / in this context) for BLUETOOTH_SCAN react native', owner: 'user', type: 'text' }, {
                msg: `It seems like you're encountering an issue related to Bluetooth scanning in a React Native application. However, the information you provided is quite brief, and it's not clear what specific problem or error you're facing.
        
            If you're developing a React Native application and trying to implement Bluetooth scanning, here are a few general steps and considerations you might find helpful:`, owner: 'bot', type: 'image', url: 'https://d3o23lul7dx07b.cloudfront.net/app_f341e7e34e74ebb4.png'
            }, { msg: 'i am using PermissionsAndroid but getting the above error', owner: 'user', type: 'text' }, { msg: `If you're using PermissionsAndroid for Bluetooth scanning in a React Native application and encountering an error, there are a few things you can check and adjust. Below are some steps to troubleshoot the issue:`, owner: 'bot', type: 'text' }])
        }
    }, [])


    const sendChat = () => {
        var message = document.getElementById('message').value;
        var aChat = [...chat];
        aChat.push({ msg: message, owner: 'user', type: 'text' })
        setchat([...aChat]);
        document.getElementById('message').value = "";
        setreplying(true)
        setTimeout(() => {
            setreplying(false);
            if (message.indexOf('pic') !== -1) {
                aChat.push({ owner: 'bot', type: 'image', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtj1Hz2NnOsGq-4w_pSTG6v5y8j63tcsEJfw&usqp=CAU' })
            }
            else if (message.indexOf('video') !== -1) {
                aChat.push({ owner: 'bot', type: 'video', url: 'https://www.mantecsecuricor.com/wp-content/uploads/2023/08/Home-Page-Video.mp4' })
            }
            else {
                aChat.push({ owner: 'bot', type: 'text', msg: 'Sorry I was not able to understand you' })
            }


            setchat([...aChat]);
        }, 2000)
    }

    const submitRequest = (event) => {
        if (event.key === 'Enter') {
            // 👇 Get input value
            sendChat();
        }
        console.log("Hi")
    }
    return (
        // <div style={{
        //     flex: 1,
        //     margin: '20px 50px',
        //     borderRadius: 25,
        //     display: 'flex',
        //     flexDirection: 'column',
        //     alignItems: 'center',
        //     padding: 20
        // }}>
        //     <div style={{
        //         flex: 1,
        //         display: 'flex',
        //         flexDirection: 'column',
        //         alignItems: 'center',
        //         maxWidth: 700,
        //         width: '100%'
        //     }}>
        //         {/* <h1 style={{ color: 'black', textAlign: 'left', width: '100%' }}>FixltBot</h1> */}
        //         {/* <hr style={{ border: '1px solid #4D4D4F', marginBottom: 10, width: '100%' }} /> */}
        //         <div style={{ width: '100%', paddingBottom: 70, flex: 1 }}>
        //             <div className='chatDiv' style={{ overflowY: 'auto' }}
        //             // style={{ alignItems: val.owner == 'user' ? 'start' : 'end' }}
        //             >

        //                 {chat.length > 0 ? chat.map((val, index) => {
        //                     return <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
        //                         <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 20 }}>
        //                             <div>
        //                                 <span style={{ color: 'white', fontSize: 10, backgroundColor: val.owner == 'user' ? 'blue' : '#ff7d00', padding: 5, borderRadius: '50%', marginRight: 10 }}>{val.owner == 'user' ? 'DK' : 'AS'}</span>
        //                                 <span style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>{val.owner == 'user' ? 'You' : 'Bot'}</span>
        //                             </div>
        //                             <div className='chatBox' style={{
        //                                 display: 'flex',
        //                                 flexDirection: 'column',
        //                                 color: '#000',
        //                                 marginLeft: 35,
        //                                 marginTop: 10
        //                             }}>

        //                                 {val.msg}

        //                             </div>
        //                         </div>

        //                         {val.type == 'image' && <div className='chatBox' style={{
        //                             padding: 10,
        //                             marginTop: 0,
        //                             marginLeft: 25
        //                         }}>

        //                             <img style={{ maxHeight: 200 }} src={val.url} />
        //                         </div>}
        //                         {val.type == 'video' && <div className='chatBox' style={{
        //                             padding: 10,
        //                             marginTop: 0,
        //                             marginLeft: 25
        //                         }}>

        //                             <video height="200" controls>
        //                                 {/* Replace 'your-video.mp4' with the actual path to your video file */}
        //                                 <source src={val.url} type="video/mp4" />
        //                                 Your browser does not support the video tag.
        //                             </video>
        //                         </div>}



        //                     </div>
        //                 }) : <div >
        //                     <img style={{ width: 80, borderRadius: '50%' }} src={"https://d3o23lul7dx07b.cloudfront.net/app_f341e7e34e74ebb4.png"} />
        //                 </div>}
        //                 <div style={{ marginLeft: 25 }}>
        //                     <ThreeDots
        //                         visible={replying}
        //                         height="80"
        //                         width="80"
        //                         color="#4fa94d"
        //                         radius="9"
        //                         ariaLabel="three-dots-loading"
        //                         wrapperStyle={{}}
        //                         wrapperClass=""
        //                     />
        //                 </div>
        //             </div>
        //         </div>
        //         {/* <hr style={{ border: '1px solid #4D4D4F', marginBottom: 10, width: '100%' }} /> */}

        //     </div>
        //     <div style={{
        //         display: 'flex',
        //         width: '100%',
        //         maxWidth: 700,
        //         justifyContent: 'center',
        //         alignItems: 'center',
        //         position: 'absolute',
        //         bottom: 0,
        //         background: 'white',
        //         paddingBottom: 20
        //     }}>
        //         <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        //             {chat.length == 0 && <div style={{ display: 'flex', flexDirection: 'column', padding: 10 }}>
        //                 <div style={{ display: 'flex', flexDirection: 'row' }}>
        //                     <button onClick={() => {
        //                         document.getElementById("message").value = "Create a charter to create a movie";
        //                         sendChat();
        //                     }} style={{ display: 'flex', flexDirection: 'column', color: 'black', flex: 1, padding: '10px 15px', borderRadius: 5, border: '1px solid #0000004d', fontWeight: 600, background: 'white', cursor: 'pointer', textAlign: 'left', lineHeight: '20px', margin: 5, fontSize: 15 }}><span>Create a charter</span><span style={{ fontWeight: 100 }}>to create a movie</span></button>
        //                     <button onClick={() => {
        //                         document.getElementById("message").value = "Create a charter to create a movie";
        //                         sendChat();
        //                     }} style={{ display: 'flex', flexDirection: 'column', color: 'black', flex: 1, padding: '10px 15px', borderRadius: 5, border: '1px solid #0000004d', fontWeight: 600, background: 'white', cursor: 'pointer', textAlign: 'left', lineHeight: '20px', margin: 5, fontSize: 15 }}><span>Create a charter</span><span style={{ fontWeight: 100 }}>to create a movie</span></button>

        //                 </div>
        //                 <div style={{ display: 'flex', flexDirection: 'row' }}>
        //                     <button onClick={() => {
        //                         document.getElementById("message").value = "Create a charter to create a movie";
        //                         sendChat();
        //                     }} style={{ display: 'flex', flexDirection: 'column', color: 'black', flex: 1, padding: '10px 15px', borderRadius: 5, border: '1px solid #0000004d', fontWeight: 600, background: 'white', cursor: 'pointer', textAlign: 'left', lineHeight: '20px', margin: 5, fontSize: 15 }}><span>Create a charter</span><span style={{ fontWeight: 100 }}>to create a movie</span></button>
        //                     <button onClick={() => {
        //                         document.getElementById("message").value = "Create a charter to create a movie";
        //                         sendChat();
        //                     }} style={{ display: 'flex', flexDirection: 'column', color: 'black', flex: 1, padding: '10px 15px', borderRadius: 5, border: '1px solid #0000004d', fontWeight: 600, background: 'white', cursor: 'pointer', textAlign: 'left', lineHeight: '20px', margin: 5, fontSize: 15 }}><span>Create a charter</span><span style={{ fontWeight: 100 }}>to create a movie</span></button>

        //                 </div>
        //             </div>}
        //             <div style={{
        //                 display: 'flex',
        //                 maxWidth: 700,
        //                 justifyContent: 'center',
        //                 alignItems: 'center',
        //                 gap: 10,
        //                 color: 'white',
        //                 border: '1px solid #00000061',
        //                 padding: 10,
        //                 borderRadius: 10,
        //                 boxShadow: '6px 8px 20px 0px #00000054',

        //                 background: 'white'
        //             }}>
        //                 <div style={{ display: 'flex', flexDirection: 'column', gap: 10, cursor: 'pointer' }}>
        //                     <input
        //                         type="file"
        //                         accept=".png, .jpg, .jpeg, .gif"
        //                         ref={fileInputRef}
        //                         style={{ display: 'none' }}
        //                         onChange={handleFileUpload}
        //                     />
        //                     <IoMdAttach color='black' size={20} onClick={handleButtonClick} />
        //                 </div>
        //                 <div style={{
        //                     flex: 1, border: '1px solid #FFF',
        //                     borderRadius: 25,
        //                 }}>
        //                     <input
        //                         className="outline-none"
        //                         id="message"
        //                         type="text"
        //                         placeholder="Type a message"
        //                         style={{
        //                             background: 'transparent',
        //                             border: 0,
        //                             fontSize: 15,
        //                             color: 'black',
        //                             width: '100%',
        //                         }}
        //                         onKeyDown={submitRequest}
        //                     />
        //                 </div>
        //                 <RiSendPlane2Fill color='black' onClick={sendChat} />
        //             </div>
        //         </div>
        //     </div>
        // </div>


        <div ref={scrollableDivRef} style={{ flex: 1, overflowY: 'auto', alignItems: 'center', width: '100%', display: 'flex', flexDirection: 'column', padding: 20 }}>
            <div style={{ maxWidth: 700, width: '100%', flex: 1, display: 'flex', flexDirection: 'column', marginBottom: 80 }}>
                {chat.length > 0 ? chat.map((val, index) => {
                    return <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', marginTop: 20 }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <span style={{ color: 'white', fontSize: 15, backgroundColor: val.owner == 'user' ? 'blue' : '#ff7d00', padding: 5, borderRadius: '50%', marginRight: 10 }}>{val.owner == 'user' ? 'DK' : 'AS'}</span>
                                <span style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>{val.owner == 'user' ? 'You' : 'Bot'}</span>
                            </div>
                            <div className='chatBox' style={{
                                display: 'flex',
                                flexDirection: 'column',
                                color: '#000',
                                marginLeft: 35,
                                marginTop: 10,
                            }}>

                                {val.msg}

                            </div>
                        </div>

                        {val.type == 'image' && <div className='chatBox' style={{
                            padding: 10,
                            marginTop: 0,
                            marginLeft: 25
                        }}>

                            <img style={{ maxHeight: 200, borderRadius: 5 }} src={val.url} />
                        </div>}
                        {val.type == 'video' && <div className='chatBox' style={{
                            padding: 10,
                            marginTop: 0,
                            marginLeft: 25
                        }}>

                            <video height="200" controls>
                                {/* Replace 'your-video.mp4' with the actual path to your video file */}
                                <source src={val.url} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>}




                    </div>
                }) : <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <img src={'https://d3o23lul7dx07b.cloudfront.net/app_f341e7e34e74ebb4.png'} width='100px' style={{ borderRadius: '50%' }} />
                    <h1>{id}</h1>
                </div>
                }
                <div style={{ marginLeft: 25 }}>
                    <ThreeDots
                        visible={replying}
                        height="80"
                        width="80"
                        color="#4fa94d"
                        radius="9"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>
            </div>

            <div style={{
                display: 'flex',
                width: '100%',
                maxWidth: 700,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                bottom: 0,
                background: 'white',
                paddingBottom: 20,
                flexDirection: 'column'
            }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    {chat.length == 0 && <div style={{ display: 'flex', flexDirection: 'column', padding: 10 }}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <button onClick={() => {
                                document.getElementById("message").value = "Create a charter to create a movie";
                                sendChat();
                            }} style={{ display: 'flex', flexDirection: 'column', color: 'black', flex: 1, padding: '10px 15px', borderRadius: 5, border: '1px solid #0000004d', fontWeight: 600, background: 'white', cursor: 'pointer', textAlign: 'left', lineHeight: '20px', margin: 5, fontSize: 15 }}><span>Create a charter</span><span style={{ fontWeight: 100 }}>to create a movie</span></button>
                            <button onClick={() => {
                                document.getElementById("message").value = "Create a charter to create a movie";
                                sendChat();
                            }} style={{ display: 'flex', flexDirection: 'column', color: 'black', flex: 1, padding: '10px 15px', borderRadius: 5, border: '1px solid #0000004d', fontWeight: 600, background: 'white', cursor: 'pointer', textAlign: 'left', lineHeight: '20px', margin: 5, fontSize: 15 }}><span>Create a charter</span><span style={{ fontWeight: 100 }}>to create a movie</span></button>

                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <button onClick={() => {
                                document.getElementById("message").value = "Create a charter to create a movie";
                                sendChat();
                            }} style={{ display: 'flex', flexDirection: 'column', color: 'black', flex: 1, padding: '10px 15px', borderRadius: 5, border: '1px solid #0000004d', fontWeight: 600, background: 'white', cursor: 'pointer', textAlign: 'left', lineHeight: '20px', margin: 5, fontSize: 15 }}><span>Create a charter</span><span style={{ fontWeight: 100 }}>to create a movie</span></button>
                            <button onClick={() => {
                                document.getElementById("message").value = "Create a charter to create a movie";
                                sendChat();
                            }} style={{ display: 'flex', flexDirection: 'column', color: 'black', flex: 1, padding: '10px 15px', borderRadius: 5, border: '1px solid #0000004d', fontWeight: 600, background: 'white', cursor: 'pointer', textAlign: 'left', lineHeight: '20px', margin: 5, fontSize: 15 }}><span>Create a charter</span><span style={{ fontWeight: 100 }}>to create a movie</span></button>

                        </div>
                    </div>}
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 10,
                    color: 'white',
                    border: '1px solid #00000061',
                    padding: 10,
                    borderRadius: 10,
                    boxShadow: '6px 8px 20px 0px #00000054',
                    width: '100%',
                    background: 'white'
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, cursor: 'pointer' }}>
                        <input
                            type="file"
                            accept=".png, .jpg, .jpeg, .gif"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            onChange={handleFileUpload}
                        />
                        <IoMdAttach color='black' size={20} onClick={handleButtonClick} />
                    </div>
                    <div style={{
                        flex: 1, border: '1px solid #FFF',
                        borderRadius: 25,
                    }}>
                        <input
                            className="outline-none"
                            id="message"
                            type="text"
                            placeholder="Type a message"
                            style={{
                                background: 'transparent',
                                border: 0,
                                fontSize: 15,
                                color: 'black',
                                width: '100%',
                            }}
                            onKeyDown={submitRequest}
                        />
                    </div>
                    <RiSendPlane2Fill color='black' onClick={sendChat} />
                </div>
            </div>
        </div>
    )
}
