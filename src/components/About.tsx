

const About = () => {
    return (
        <section id="about" className="section-container">
            <div className="max-w-7xl mx-auto w-full px-4">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Text */}
                    <div className="order-2 lg:order-1">
                        <h2 className="section-title !text-left !mb-8 !text-5xl md:!text-6xl">
                            ABOUT ME
                        </h2>

                        <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-300">
                            <p>
                                I'm a full-stack developer who enjoys building applications that can grow with their
                                users and ideas. I approach problems with structure and logic, focusing on long-term
                                performance rather than quick fixes.
                            </p>
                            <p>
                                I'm driven by curiosity and constantly learn by diving into new challenges head-first.
                                For me, development is about understanding how things work, improving them, and creating
                                solutions that last.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Code Editor */}
                    <div className="order-1 lg:order-2 w-full max-w-lg mx-auto lg:mr-0">
                        <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-white/5 font-mono text-sm sm:text-base">

                            {/* Editor Header */}
                            <div className="bg-[#2d2d2d] px-4 py-3 flex items-center justify-between border-b border-white/5">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                                </div>
                                <div className="text-gray-400 text-xs select-none">my-story.tsx</div>
                                <div className="w-10"></div> {/* Spacer for balance */}
                            </div>

                            {/* Editor Content */}
                            <div className="p-6 text-gray-300 leading-7 overflow-x-auto">
                                <div className="flex">
                                    <span className="text-gray-600 select-none w-8 text-right pr-4">1</span>
                                    <span className="text-[#c678dd]">const</span> <span className="text-[#e5c07b] ml-2">developer</span> <span className="text-[#56b6c2] ml-2">=</span> <span className="text-[#d19a66] ml-2">{`{`}</span>
                                </div>
                                <div className="flex">
                                    <span className="text-gray-600 select-none w-8 text-right pr-4">2</span>
                                    <span className="text-[#e06c75] ml-4">philosophy</span><span className="text-gray-300">:</span> <span className="text-[#98c379] ml-2">"Minimalism for focus"</span><span className="text-gray-300">,</span>
                                </div>
                                <div className="flex">
                                    <span className="text-gray-600 select-none w-8 text-right pr-4">3</span>
                                    <span className="text-[#e06c75] ml-4">approach</span><span className="text-gray-300">:</span> <span className="text-[#98c379] ml-2">"Build to last, not to patch"</span><span className="text-gray-300">,</span>
                                </div>
                                <div className="flex">
                                    <span className="text-gray-600 select-none w-8 text-right pr-4">4</span>
                                    <span className="text-[#e06c75] ml-4">drivenBy</span><span className="text-gray-300">:</span> <span className="text-[#d19a66] ml-2">[</span><span className="text-[#98c379]">"curiosity"</span><span className="text-gray-300">,</span> <span className="text-[#98c379] ml-1">"challenge"</span><span className="text-[#d19a66]">]</span><span className="text-gray-300">,</span>
                                </div>
                                <div className="flex">
                                    <span className="text-gray-600 select-none w-8 text-right pr-4">5</span>
                                    <span className="text-[#61afef] ml-4">build</span><span className="text-gray-300">:</span> <span className="text-[#c678dd] ml-2">()</span> <span className="text-[#c678dd] ml-2">=&gt;</span> <span className="text-[#98c379] ml-2">"Solutions that scale"</span>
                                </div>
                                <div className="flex">
                                    <span className="text-gray-600 select-none w-8 text-right pr-4">6</span>
                                    <span className="text-[#d19a66] ml-0">{`}`}</span><span className="text-gray-300">;</span>
                                </div>
                                <div className="flex">
                                    <span className="text-gray-600 select-none w-8 text-right pr-4">7</span>
                                </div>
                                <div className="flex">
                                    <span className="text-gray-600 select-none w-8 text-right pr-4">8</span>
                                    <span className="text-[#7f848e] italic ml-0">// Every line of code tells a story</span>
                                </div>
                                <div className="flex">
                                    <span className="text-gray-600 select-none w-8 text-right pr-4">9</span>
                                    <span className="animate-pulse bg-gray-500 w-2 h-5 ml-0 inline-block align-middle"></span>
                                </div>
                            </div>

                            {/* Status Bar */}
                            <div className="bg-[#007acc] px-4 py-1 text-white text-xs flex justify-between items-center">
                                <div className="flex items-center space-x-4">
                                    <span>TypeScript React</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span>UTF-8</span>
                                    <span>Ln 9, Col 1</span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
