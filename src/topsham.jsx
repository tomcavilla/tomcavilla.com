import React from 'react';
import Navbar from './components/Navbar';

const images = [
    { src: "https://lh3.googleusercontent.com/pw/AP1GczNFXBVUcLhoURRTmYtZsoEI1bJT-jOjRTlIrWbTbsiqQjdtaEYIuAyqxTIFuiQqiW6LEbtUAvA2VAklykDkaMB8iDi6FLsiSBIsO16XXDBZghN1Iz52W6nKML2Qpsa7YjhrG07KjWQYHXbDpgPEGRNc=w1378-h918-s-no-gm?authuser=0", orientation: "landscape" },
    { src: "https://lh3.googleusercontent.com/pw/AP1GczPHiWFvOePTWxEHzNNPC2oC5vAlKUY6DmMbfGBKg91iAzvm9s1sXOI2LJK08EpKztt_6LKszHPWphNERqxrrq8lz3cQTxDh0qJq2lCQqmtUfW60fDtgA_VzBV7diiKtdI6xSbLwV1heS683tPGN-zSa=w1378-h918-s-no-gm?authuser=0", orientation: "landscape"},
    { src: "https://lh3.googleusercontent.com/pw/AP1GczMQEnLGa9HGs_p6NTPydFst76poq0ghVlVkSwe0TA5tYLh8KGc1dgbSeoJr1-CDNsy2Eo31sGOKjVf4mJaAZ7OvXanQa0A66TnJ3D6lN6PIXJkqY9lKXW9A9tvhqykoQku8TnXTWt99XF3ANrqnfHvQ=w1378-h918-s-no-gm?authuser=0", orientation: "landscape" },
    { src: "https://lh3.googleusercontent.com/pw/AP1GczNABwRXiN85SFM5AqMbbmiDfhye7befW1RkWf5qQvl1b9pNixSjNGdl3kFobQoqyIKRXBYwLqAsQALJLMWNWUS8Ch3IKUPbxf-72rZh7hlrKUyW4pQ4IxnhVv0OfyGc53fTtMV76FlA-6_eCzCObZjn=w1378-h918-s-no-gm?authuser=0", orientation: "landscape"},
    { src: "https://lh3.googleusercontent.com/pw/AP1GczNCOWACBaSoVud3Brj-5w6T7krmTH1g6JfMQMIuMxEaJmpUGRAIM1rtriR2NPPbWJSG90fxuREIbUOiJkZWA0llnPC2laVXcQuO9z-MUslXSbnxGGS33WrpV5GwRT5Qm5ly1gM432sIKrPtvncrdXzj=w1378-h918-s-no-gm?authuser=0", orientation: "landscape" },
    { src: "https://lh3.googleusercontent.com/pw/AP1GczMmc09nbjqrZK33767gKBzjE32_NSVvrTCS7PciCELnAimS15FYxxASjQKW2SlK5zgxQKr8AyBm-KnLu162qSop_6ck3Vs56_M4n51ekiNISEM_7HTDg2XjPY8SDPNEzXg_eqclJF9kuEryDlKl5Z1I=w1378-h918-s-no-gm?authuser=0", orientation: "landscape"},
];

const Dartmoor = () => {
    return (
        <div>
            <Navbar />
            <div className="py-16 text-center">
                <h1 className="text-7xl">Topsham 18/02/25</h1>
                <div className="container mx-auto p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {images.map((image, index) => (
                            <div 
                                key={index} 
                                className={`overflow-hidden shadow-md
                                    ${image.orientation === "portrait" ? "row-span-2" : "row-span-1"}
                                `}
                            >
                                <img
                                    src={image.src}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dartmoor;







