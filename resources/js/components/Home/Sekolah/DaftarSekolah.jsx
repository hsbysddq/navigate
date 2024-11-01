import ListContent from "./ListContent";
import Pencarian from "./Pencarian";

export default function DaftarSekolah() {
    return (
        <div className="bg-[#85BD76] px-14 relative">
            <Pencarian />

            <div className="py-11">
                <div className="bg-white w-full rounded-3xl">
                    {/* Filter */}
                    <div className="pt-5 px-7">
                        <div className=" bg-[#85BD76] bg-opacity-35 grid grid-cols-5 gap-28 justify-center items-center py-3 px-7 rounded-xl">
                            <ListContent />
                            <ListContent />
                            <ListContent />
                            <ListContent />
                            <ListContent />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="pt-5 px-7">
                        <div className=" bg-[#85BD76] bg-opacity-35 flex items-center py-3 px-7 rounded-xl">
                            <div className="pr-[4.5rem]">
                                <h1 className="text-lg font-extrabold text-slate-800">
                                    SDN AENGSAREH 1
                                </h1>
                            </div>

                            <div className="pr-36">
                                <p className="text-sm font-bold">
                                    Akreditasi B
                                </p>
                            </div>

                            <div className="pr-[4.5rem] font-bold text-sm">
                                <p>Kepsek : Yusro Junaidi</p>
                                <p>NPSN : 20529219</p>
                            </div>

                            <div>
                                <p className="text-sm font-light text-slate-900">
                                    Jl. Raya Aengsareh, Demungan, Kec. Sampang
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-5 px-7">
                        <div className=" bg-[#85BD76] bg-opacity-35 flex items-center py-3 px-7 rounded-xl">
                            <div className="pr-[4.5rem]">
                                <h1 className="text-lg font-extrabold text-slate-800">
                                    SDN AENGSAREH 1
                                </h1>
                            </div>

                            <div className="pr-36">
                                <p className="text-sm font-bold">
                                    Akreditasi B
                                </p>
                            </div>

                            <div className="pr-[4.5rem] font-bold text-sm">
                                <p>Kepsek : Yusro Junaidi</p>
                                <p>NPSN : 20529219</p>
                            </div>

                            <div>
                                <p className="text-sm font-light text-slate-900">
                                    Jl. Raya Aengsareh, Demungan, Kec. Sampang
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-5 px-7">
                        <div className=" bg-[#85BD76] bg-opacity-35 flex items-center py-3 px-7 rounded-xl">
                            <div className="pr-[4.5rem]">
                                <h1 className="text-lg font-extrabold text-slate-800">
                                    SDN AENGSAREH 1
                                </h1>
                            </div>

                            <div className="pr-36">
                                <p className="text-sm font-bold">
                                    Akreditasi B
                                </p>
                            </div>

                            <div className="pr-[4.5rem] font-bold text-sm">
                                <p>Kepsek : Yusro Junaidi</p>
                                <p>NPSN : 20529219</p>
                            </div>

                            <div>
                                <p className="text-sm font-light text-slate-900">
                                    Jl. Raya Aengsareh, Demungan, Kec. Sampang
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-5 px-7 pb-5">
                        <div className=" bg-[#85BD76] bg-opacity-35 flex items-center py-3 px-7 rounded-xl">
                            <div className="pr-[4.5rem]">
                                <h1 className="text-lg font-extrabold text-slate-800">
                                    SDN AENGSAREH 1
                                </h1>
                            </div>

                            <div className="pr-36">
                                <p className="text-sm font-bold">
                                    Akreditasi B
                                </p>
                            </div>

                            <div className="pr-[4.5rem] font-bold text-sm">
                                <p>Kepsek : Yusro Junaidi</p>
                                <p>NPSN : 20529219</p>
                            </div>

                            <div>
                                <p className="text-sm font-light text-slate-900">
                                    Jl. Raya Aengsareh, Demungan, Kec. Sampang
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
