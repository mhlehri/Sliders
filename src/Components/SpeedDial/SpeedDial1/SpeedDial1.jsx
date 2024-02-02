import CodeBox from '../../../Shared/CodeBox/CodeBox';

const codeStr = `const SpeedDial1 = () => {
    const svgs = [
        {svg: (<svg className="fill-gray-500" width={20} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 503.641 503.641" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><g transform="translate(1 1)"><g><g><path d="M460.494,106.408c-0.426-2.505-1.788-4.448-3.809-5.571L358.836,2.988c-1.124-2.021-3.067-3.383-5.571-3.809 c-0.714-0.16-1.45-0.211-2.199-0.146H116.508c-14.269,0-25.18,10.911-25.18,25.18v25.18h-25.18 c-14.269,0-25.18,10.911-25.18,25.18V477.46c0,14.269,10.911,25.18,25.18,25.18h318.951c14.269,0,25.18-10.911,25.18-25.18 v-25.18h25.18c14.269,0,25.18-10.911,25.18-25.18V108.608C460.705,107.858,460.654,107.122,460.494,106.408z M432.102,99.755 h-63.79c-5.036,0-8.393-3.357-8.393-8.393v-63.79L432.102,99.755z M393.492,477.46c0,5.036-3.357,8.393-8.393,8.393H66.147 c-5.036,0-8.393-3.357-8.393-8.393V74.575c0-4.197,3.357-8.393,8.393-8.393h24.341h0.839V427.1 c0,14.269,10.911,25.18,25.18,25.18h276.984V477.46z M443.852,427.1c0,5.036-3.357,8.393-8.393,8.393h-34.413H116.508 c-5.036,0-8.393-3.357-8.393-8.393V59.467V24.214c0-4.197,3.357-8.393,8.393-8.393h226.623v75.541 c0,14.269,10.911,25.18,25.18,25.18h75.541V427.1z"></path><path d="M158.475,116.542h151.082c5.036,0,8.393-3.357,8.393-8.393s-3.357-8.393-8.393-8.393H158.475 c-5.036,0-8.393,3.357-8.393,8.393S153.439,116.542,158.475,116.542z"></path><path d="M150.082,158.509c0,5.036,3.357,8.393,8.393,8.393h251.803c5.036,0,8.393-3.357,8.393-8.393s-3.357-8.393-8.393-8.393 H158.475C153.439,150.116,150.082,153.473,150.082,158.509z"></path><path d="M410.279,200.477H158.475c-5.036,0-8.393,3.357-8.393,8.393s3.357,8.393,8.393,8.393h251.803 c5.036,0,8.393-3.357,8.393-8.393S415.315,200.477,410.279,200.477z"></path><path d="M410.279,250.837H158.475c-5.036,0-8.393,3.357-8.393,8.393s3.357,8.393,8.393,8.393h251.803 c5.036,0,8.393-3.357,8.393-8.393S415.315,250.837,410.279,250.837z"></path><path d="M410.279,301.198H158.475c-5.036,0-8.393,3.357-8.393,8.393s3.357,8.393,8.393,8.393h251.803 c5.036,0,8.393-3.357,8.393-8.393S415.315,301.198,410.279,301.198z"></path><path d="M410.279,351.559H158.475c-5.036,0-8.393,3.357-8.393,8.393s3.357,8.393,8.393,8.393h251.803 c5.036,0,8.393-3.357,8.393-8.393S415.315,351.559,410.279,351.559z"></path></g></g></g></g></svg>)},
        {svg: (<svg width={20} version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#6b7280"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><g><path className="st0" d="M324.288,389.972c-12.581,0-22.774,10.193-22.774,22.757c0,12.564,10.193,22.758,22.774,22.758 c12.564,0,22.757-10.193,22.757-22.758C347.045,400.165,336.852,389.972,324.288,389.972z"></path><path className="st0" d="M400.592,389.972c-12.58,0-22.773,10.193-22.773,22.757c0,12.564,10.194,22.758,22.773,22.758 c12.564,0,22.758-10.193,22.758-22.758C423.35,400.165,413.156,389.972,400.592,389.972z"></path><path className="st0" d="M475.735,323.135l-82.965-68.11c-15.386-12.613-34.676-19.524-54.595-19.524h-26.644l-23.128,25.709 c-8.258,9.161-20.064,14.419-32.403,14.419c-12.338,0-24.144-5.258-32.402-14.419l-23.128-25.709h-26.66 c-19.902,0-39.192,6.911-54.579,19.524l-82.964,68.11C18.491,335.989,6.879,356.852,6.879,380.48v60.708 c0.016,39.12,31.693,70.804,70.804,70.812H256H434.3c39.112-0.008,70.82-31.693,70.82-70.812V380.48 C505.121,356.852,493.509,335.989,475.735,323.135z M464.654,441.188c0,8.444-3.371,15.903-8.886,21.459 c-5.548,5.516-13.016,8.879-21.468,8.887H77.683c-8.435-0.008-15.903-3.371-21.451-8.887c-5.532-5.556-8.886-13.015-8.886-21.459 V380.48c0-8.443,3.354-15.91,8.886-21.45c5.548-5.524,13.016-8.887,21.451-8.895H434.3c8.452,0.008,15.919,3.371,21.468,8.895 c5.516,5.54,8.886,13.008,8.886,21.45V441.188z"></path><path className="st0" d="M242.017,244.637c3.564,3.96,8.661,6.218,13.983,6.218c5.339,0,10.42-2.258,13.984-6.218l71.53-79.489 c4.984-5.516,6.226-13.451,3.21-20.241c-3.016-6.782-9.758-11.153-17.177-11.153h-33.612V18.814C293.934,8.428,285.499,0,275.112,0 h-38.224c-10.387,0-18.806,8.428-18.806,18.814v114.94H184.47c-7.419,0-14.16,4.371-17.192,11.153 c-3.016,6.79-1.758,14.725,3.21,20.241L242.017,244.637z"></path></g></g></svg>)},
        {svg: (<svg width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>)},
        {svg: (<svg width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M17.5 14.25C16.9877 14.2518 16.4831 14.3751 16.0276 14.6098C15.5722 14.8445 15.1789 15.1838 14.88 15.6L9.59 13C9.6931 12.6765 9.74704 12.3394 9.75 12C9.74704 11.6605 9.6931 11.3234 9.59 11L14.88 8.39996C15.3362 9.01882 15.9982 9.45467 16.7469 9.62915C17.4957 9.80363 18.2821 9.7053 18.9649 9.35185C19.6477 8.99839 20.182 8.41299 20.4717 7.70086C20.7615 6.98874 20.7878 6.19661 20.5458 5.46685C20.3038 4.7371 19.8095 4.11758 19.1517 3.71967C18.4938 3.32177 17.7156 3.17156 16.9569 3.29605C16.1982 3.42055 15.5089 3.81158 15.0127 4.39886C14.5165 4.98614 14.2461 5.73115 14.25 6.49996C14.2524 6.66775 14.2691 6.83503 14.3 6.99996L8.83 9.74996C8.53061 9.43287 8.16938 9.18052 7.76862 9.00852C7.36787 8.83653 6.9361 8.74853 6.5 8.74996C5.63805 8.74996 4.8114 9.09237 4.2019 9.70187C3.59241 10.3114 3.25 11.138 3.25 12C3.25 12.8619 3.59241 13.6886 4.2019 14.2981C4.8114 14.9076 5.63805 15.25 6.5 15.25C6.9361 15.2514 7.36787 15.1634 7.76862 14.9914C8.16938 14.8194 8.53061 14.5671 8.83 14.25L14.3 17C14.2685 17.1682 14.2518 17.3388 14.25 17.51C14.25 18.1528 14.4406 18.7811 14.7977 19.3156C15.1548 19.85 15.6624 20.2666 16.2563 20.5126C16.8501 20.7586 17.5036 20.8229 18.134 20.6975C18.7645 20.5721 19.3436 20.2626 19.7981 19.8081C20.2526 19.3535 20.5621 18.7744 20.6876 18.144C20.813 17.5136 20.7486 16.8601 20.5026 16.2662C20.2566 15.6724 19.8401 15.1648 19.3056 14.8077C18.7711 14.4506 18.1428 14.26 17.5 14.26V14.25ZM17.5 4.74996C17.8461 4.74996 18.1845 4.8526 18.4722 5.04489C18.76 5.23718 18.9843 5.5105 19.1168 5.83027C19.2492 6.15004 19.2839 6.50191 19.2164 6.84137C19.1488 7.18084 18.9822 7.49266 18.7374 7.7374C18.4927 7.98214 18.1809 8.14881 17.8414 8.21634C17.5019 8.28386 17.1501 8.24921 16.8303 8.11675C16.5105 7.9843 16.2372 7.76 16.0449 7.47221C15.8526 7.18443 15.75 6.84608 15.75 6.49996C15.7526 6.03664 15.9378 5.59305 16.2655 5.26543C16.5931 4.93781 17.0367 4.75259 17.5 4.74996ZM6.5 13.75C6.15388 13.75 5.81554 13.6473 5.52775 13.455C5.23997 13.2627 5.01566 12.9894 4.88321 12.6697C4.75076 12.3499 4.7161 11.998 4.78363 11.6586C4.85115 11.3191 5.01782 11.0073 5.26256 10.7625C5.50731 10.5178 5.81912 10.3511 6.15859 10.2836C6.49806 10.2161 6.84993 10.2507 7.1697 10.3832C7.48947 10.5156 7.76278 10.7399 7.95507 11.0277C8.14736 11.3155 8.25 11.6538 8.25 12C8.24738 12.4633 8.06216 12.9069 7.73454 13.2345C7.40691 13.5621 6.96332 13.7473 6.5 13.75ZM17.5 19.25C17.1539 19.25 16.8155 19.1473 16.5278 18.955C16.24 18.7627 16.0157 18.4894 15.8832 18.1697C15.7508 17.8499 15.7161 17.498 15.7836 17.1586C15.8511 16.8191 16.0178 16.5073 16.2626 16.2625C16.5073 16.0178 16.8191 15.8511 17.1586 15.7836C17.4981 15.7161 17.8499 15.7507 18.1697 15.8832C18.4895 16.0156 18.7628 16.2399 18.9551 16.5277C19.1474 16.8155 19.25 17.1538 19.25 17.5C19.2474 17.9633 19.0622 18.4069 18.7345 18.7345C18.4069 19.0621 17.9633 19.2473 17.5 19.25Z" fill="#6b7280"></path></g></svg>)}
    ];
    return (
        <div className="h-[300px] relative">
                <div className="group flex flex-col items-center justify-center w-max mx-auto absolute top-0 left-[50%] -translate-x-1/2">
                    {/* + icon  */}
                    <div className="flex justify-center w-16 h-16 bg-[#0095FF] rounded-full items-center group-hover:rotate-[135deg] hover:bg-[#0095FF]/80 duration-500">
                        <svg width={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>{' '}<g id="SVGRepo_iconCarrier"><path d="M4 12H20M12 4V20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                    </div>
                    {/* icon container  */}
                    <div className="space-y-4 duration-500 h-0 group-hover:my-4 group-hover:h-full ">
                        {/* Icon Map */}
                        {svgs?.map((svg, idx) => (
                            <div key={idx} className={\`w-10 h-10 rounded-full scale-0 group-hover:scale-100 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] opacity-0 group-hover:opacity-100 \${idx === 0 ? 'delay-[400ms] group-hover:delay-100' : idx === 1 ? 'delay-300 group-hover:delay-200' : idx === 2 ? 'delay-200 group-hover:delay-300' : idx === 3 ? 'delay-100 group-hover:delay-[400ms]' : 'delay-[400ms] group-hover:delay-100'}\`}>
                                <div className="w-full h-full bg-white hover:bg-slate-200 flex justify-center items-center rounded-full duration-300">{svg?.svg}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    );
};
export default SpeedDial1;
`;

const SpeedDial1 = () => {
    const svgs = [
        {
            svg: (
                <svg
                    className="fill-gray-500"
                    width={20}
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 503.641 503.641"
                    xmlSpace="preserve"
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <g transform="translate(1 1)">
                            <g>
                                <g>
                                    <path d="M460.494,106.408c-0.426-2.505-1.788-4.448-3.809-5.571L358.836,2.988c-1.124-2.021-3.067-3.383-5.571-3.809 c-0.714-0.16-1.45-0.211-2.199-0.146H116.508c-14.269,0-25.18,10.911-25.18,25.18v25.18h-25.18 c-14.269,0-25.18,10.911-25.18,25.18V477.46c0,14.269,10.911,25.18,25.18,25.18h318.951c14.269,0,25.18-10.911,25.18-25.18 v-25.18h25.18c14.269,0,25.18-10.911,25.18-25.18V108.608C460.705,107.858,460.654,107.122,460.494,106.408z M432.102,99.755 h-63.79c-5.036,0-8.393-3.357-8.393-8.393v-63.79L432.102,99.755z M393.492,477.46c0,5.036-3.357,8.393-8.393,8.393H66.147 c-5.036,0-8.393-3.357-8.393-8.393V74.575c0-4.197,3.357-8.393,8.393-8.393h24.341h0.839V427.1 c0,14.269,10.911,25.18,25.18,25.18h276.984V477.46z M443.852,427.1c0,5.036-3.357,8.393-8.393,8.393h-34.413H116.508 c-5.036,0-8.393-3.357-8.393-8.393V59.467V24.214c0-4.197,3.357-8.393,8.393-8.393h226.623v75.541 c0,14.269,10.911,25.18,25.18,25.18h75.541V427.1z"></path>
                                    <path d="M158.475,116.542h151.082c5.036,0,8.393-3.357,8.393-8.393s-3.357-8.393-8.393-8.393H158.475 c-5.036,0-8.393,3.357-8.393,8.393S153.439,116.542,158.475,116.542z"></path>
                                    <path d="M150.082,158.509c0,5.036,3.357,8.393,8.393,8.393h251.803c5.036,0,8.393-3.357,8.393-8.393s-3.357-8.393-8.393-8.393 H158.475C153.439,150.116,150.082,153.473,150.082,158.509z"></path>
                                    <path d="M410.279,200.477H158.475c-5.036,0-8.393,3.357-8.393,8.393s3.357,8.393,8.393,8.393h251.803 c5.036,0,8.393-3.357,8.393-8.393S415.315,200.477,410.279,200.477z"></path>
                                    <path d="M410.279,250.837H158.475c-5.036,0-8.393,3.357-8.393,8.393s3.357,8.393,8.393,8.393h251.803 c5.036,0,8.393-3.357,8.393-8.393S415.315,250.837,410.279,250.837z"></path>
                                    <path d="M410.279,301.198H158.475c-5.036,0-8.393,3.357-8.393,8.393s3.357,8.393,8.393,8.393h251.803 c5.036,0,8.393-3.357,8.393-8.393S415.315,301.198,410.279,301.198z"></path>
                                    <path d="M410.279,351.559H158.475c-5.036,0-8.393,3.357-8.393,8.393s3.357,8.393,8.393,8.393h251.803 c5.036,0,8.393-3.357,8.393-8.393S415.315,351.559,410.279,351.559z"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            )
        },
        {
            svg: (
                <svg width={20} version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#6b7280">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <g>
                            <path
                                className="st0"
                                d="M324.288,389.972c-12.581,0-22.774,10.193-22.774,22.757c0,12.564,10.193,22.758,22.774,22.758 c12.564,0,22.757-10.193,22.757-22.758C347.045,400.165,336.852,389.972,324.288,389.972z"
                            ></path>
                            <path
                                className="st0"
                                d="M400.592,389.972c-12.58,0-22.773,10.193-22.773,22.757c0,12.564,10.194,22.758,22.773,22.758 c12.564,0,22.758-10.193,22.758-22.758C423.35,400.165,413.156,389.972,400.592,389.972z"
                            ></path>
                            <path
                                className="st0"
                                d="M475.735,323.135l-82.965-68.11c-15.386-12.613-34.676-19.524-54.595-19.524h-26.644l-23.128,25.709 c-8.258,9.161-20.064,14.419-32.403,14.419c-12.338,0-24.144-5.258-32.402-14.419l-23.128-25.709h-26.66 c-19.902,0-39.192,6.911-54.579,19.524l-82.964,68.11C18.491,335.989,6.879,356.852,6.879,380.48v60.708 c0.016,39.12,31.693,70.804,70.804,70.812H256H434.3c39.112-0.008,70.82-31.693,70.82-70.812V380.48 C505.121,356.852,493.509,335.989,475.735,323.135z M464.654,441.188c0,8.444-3.371,15.903-8.886,21.459 c-5.548,5.516-13.016,8.879-21.468,8.887H77.683c-8.435-0.008-15.903-3.371-21.451-8.887c-5.532-5.556-8.886-13.015-8.886-21.459 V380.48c0-8.443,3.354-15.91,8.886-21.45c5.548-5.524,13.016-8.887,21.451-8.895H434.3c8.452,0.008,15.919,3.371,21.468,8.895 c5.516,5.54,8.886,13.008,8.886,21.45V441.188z"
                            ></path>
                            <path
                                className="st0"
                                d="M242.017,244.637c3.564,3.96,8.661,6.218,13.983,6.218c5.339,0,10.42-2.258,13.984-6.218l71.53-79.489 c4.984-5.516,6.226-13.451,3.21-20.241c-3.016-6.782-9.758-11.153-17.177-11.153h-33.612V18.814C293.934,8.428,285.499,0,275.112,0 h-38.224c-10.387,0-18.806,8.428-18.806,18.814v114.94H184.47c-7.419,0-14.16,4.371-17.192,11.153 c-3.016,6.79-1.758,14.725,3.21,20.241L242.017,244.637z"
                            ></path>
                        </g>
                    </g>
                </svg>
            )
        },
        {
            svg: (
                <svg width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                            stroke="#6b7280"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </g>
                </svg>
            )
        },
        {
            svg: (
                <svg width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="M17.5 14.25C16.9877 14.2518 16.4831 14.3751 16.0276 14.6098C15.5722 14.8445 15.1789 15.1838 14.88 15.6L9.59 13C9.6931 12.6765 9.74704 12.3394 9.75 12C9.74704 11.6605 9.6931 11.3234 9.59 11L14.88 8.39996C15.3362 9.01882 15.9982 9.45467 16.7469 9.62915C17.4957 9.80363 18.2821 9.7053 18.9649 9.35185C19.6477 8.99839 20.182 8.41299 20.4717 7.70086C20.7615 6.98874 20.7878 6.19661 20.5458 5.46685C20.3038 4.7371 19.8095 4.11758 19.1517 3.71967C18.4938 3.32177 17.7156 3.17156 16.9569 3.29605C16.1982 3.42055 15.5089 3.81158 15.0127 4.39886C14.5165 4.98614 14.2461 5.73115 14.25 6.49996C14.2524 6.66775 14.2691 6.83503 14.3 6.99996L8.83 9.74996C8.53061 9.43287 8.16938 9.18052 7.76862 9.00852C7.36787 8.83653 6.9361 8.74853 6.5 8.74996C5.63805 8.74996 4.8114 9.09237 4.2019 9.70187C3.59241 10.3114 3.25 11.138 3.25 12C3.25 12.8619 3.59241 13.6886 4.2019 14.2981C4.8114 14.9076 5.63805 15.25 6.5 15.25C6.9361 15.2514 7.36787 15.1634 7.76862 14.9914C8.16938 14.8194 8.53061 14.5671 8.83 14.25L14.3 17C14.2685 17.1682 14.2518 17.3388 14.25 17.51C14.25 18.1528 14.4406 18.7811 14.7977 19.3156C15.1548 19.85 15.6624 20.2666 16.2563 20.5126C16.8501 20.7586 17.5036 20.8229 18.134 20.6975C18.7645 20.5721 19.3436 20.2626 19.7981 19.8081C20.2526 19.3535 20.5621 18.7744 20.6876 18.144C20.813 17.5136 20.7486 16.8601 20.5026 16.2662C20.2566 15.6724 19.8401 15.1648 19.3056 14.8077C18.7711 14.4506 18.1428 14.26 17.5 14.26V14.25ZM17.5 4.74996C17.8461 4.74996 18.1845 4.8526 18.4722 5.04489C18.76 5.23718 18.9843 5.5105 19.1168 5.83027C19.2492 6.15004 19.2839 6.50191 19.2164 6.84137C19.1488 7.18084 18.9822 7.49266 18.7374 7.7374C18.4927 7.98214 18.1809 8.14881 17.8414 8.21634C17.5019 8.28386 17.1501 8.24921 16.8303 8.11675C16.5105 7.9843 16.2372 7.76 16.0449 7.47221C15.8526 7.18443 15.75 6.84608 15.75 6.49996C15.7526 6.03664 15.9378 5.59305 16.2655 5.26543C16.5931 4.93781 17.0367 4.75259 17.5 4.74996ZM6.5 13.75C6.15388 13.75 5.81554 13.6473 5.52775 13.455C5.23997 13.2627 5.01566 12.9894 4.88321 12.6697C4.75076 12.3499 4.7161 11.998 4.78363 11.6586C4.85115 11.3191 5.01782 11.0073 5.26256 10.7625C5.50731 10.5178 5.81912 10.3511 6.15859 10.2836C6.49806 10.2161 6.84993 10.2507 7.1697 10.3832C7.48947 10.5156 7.76278 10.7399 7.95507 11.0277C8.14736 11.3155 8.25 11.6538 8.25 12C8.24738 12.4633 8.06216 12.9069 7.73454 13.2345C7.40691 13.5621 6.96332 13.7473 6.5 13.75ZM17.5 19.25C17.1539 19.25 16.8155 19.1473 16.5278 18.955C16.24 18.7627 16.0157 18.4894 15.8832 18.1697C15.7508 17.8499 15.7161 17.498 15.7836 17.1586C15.8511 16.8191 16.0178 16.5073 16.2626 16.2625C16.5073 16.0178 16.8191 15.8511 17.1586 15.7836C17.4981 15.7161 17.8499 15.7507 18.1697 15.8832C18.4895 16.0156 18.7628 16.2399 18.9551 16.5277C19.1474 16.8155 19.25 17.1538 19.25 17.5C19.2474 17.9633 19.0622 18.4069 18.7345 18.7345C18.4069 19.0621 17.9633 19.2473 17.5 19.25Z"
                            fill="#6b7280"
                        ></path>
                    </g>
                </svg>
            )
        }
    ];
    return (
        <CodeBox codeStr={codeStr}>
            <div className="h-[300px] relative">
                <div className="group flex flex-col items-center justify-center w-max mx-auto absolute top-0 left-[50%] -translate-x-1/2">
                    {/* + icon  */}
                    <div className="flex justify-center w-16 h-16 bg-[#0095FF] rounded-full items-center group-hover:rotate-[135deg] hover:bg-[#0095FF]/80 duration-500">
                        <svg width={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {' '}
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>{' '}
                            <g id="SVGRepo_iconCarrier">
                                <path d="M4 12H20M12 4V20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </g>
                        </svg>
                    </div>
                    {/* icon container  */}
                    <div className="space-y-4 duration-500 h-0 group-hover:my-4 group-hover:h-full ">
                        {/* Icon Map */}
                        {svgs?.map((svg, idx) => (
                            <div
                                key={idx}
                                className={`w-10 h-10 rounded-full scale-0 group-hover:scale-100 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] opacity-0 group-hover:opacity-100 ${
                                    idx === 0
                                        ? 'delay-[400ms] group-hover:delay-100'
                                        : idx === 1
                                        ? 'delay-300 group-hover:delay-200'
                                        : idx === 2
                                        ? 'delay-200 group-hover:delay-300'
                                        : idx === 3
                                        ? 'delay-100 group-hover:delay-[400ms]'
                                        : 'delay-[400ms] group-hover:delay-100'
                                }`}
                            >
                                <div className="w-full h-full bg-white hover:bg-slate-200 flex justify-center items-center rounded-full duration-300">{svg?.svg}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </CodeBox>
    );
};

export default SpeedDial1;
