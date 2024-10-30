export default function Footer() {
    return (
        <div className="flex bg-[#2F2D52] mx-14 mb-8 rounded-2xl border-2 border-black items-center">
            {/* Footer Kiri */}
            <div className="w-5/12 pl-8">
                <img src="images/logo-footer.png" alt="Logo" className="h-8" />
                <p className="text-slate-200 mt-5 text-sm">
                    NaviGate merupakan campuran dari dua kata "Navi" yang
                    berarti menavigasi dan "Gate" yang berarti gerbang. NaviGate
                    berarti gerbang untuk menavigasi pendidikan, membantu orang
                    tua dan siswa dalam menemukan jalan mereka dalam dunia
                    pendidikan khususnya di pulau Madura.
                </p>
            </div>

            {/* Footer Tengah */}
            <div className="pl-36 text-white pr-10">
                <h2 className=" text-2xl text-slate-200 mb-1">Features</h2>
                <div className="text-base">
                    <p className="mb-1">Blog</p>
                    <p className="mb-1">Beasiswa</p>
                    <p className="mb-1">Perbandingan</p>
                    <p className="mb-1">Pencarian Sekolah</p>
                </div>
            </div>
            <div className="text-white pr-10">
                <div className="text-base">
                    <p className="mb-1 pt-16">Kalender</p>
                    <p className="mb-1">Tips Pendidikan</p>
                    <p className="mb-1">Pendaftran Sekolah</p>
                </div>
            </div>

            {/* Footer Kanan */}
            <div className="py-8 pr-7 pt-28">
                <div className="flex items-center">
                    <img
                        src="images/instagram.png"
                        alt="instagram"
                        className="h-6 mr-4"
                    />
                    <p className="text-slate-200">Instagram</p>
                    <img
                        src="images/arrow.png"
                        alt="arrow"
                        className="h-3 ml-6"
                    />
                </div>
                <div className="flex items-center pt-3">
                    <img
                        src="images/youtube.png"
                        alt="youtube"
                        className="h-6 mr-5"
                    />
                    <p className="text-slate-200">You Tube</p>
                    <img
                        src="images/arrow.png"
                        alt="arrow"
                        className="h-3 ml-6"
                    />
                </div>
            </div>
        </div>
    );
}
