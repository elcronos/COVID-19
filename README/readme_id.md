
**Detektor COVID-19**

Pandemi penyakit novel coronavirus (COVID-19) dimulai tahun lalu pada Desember 2019 di Wuhan, Cina. Kemudian, penyakit ini menyebar dengan cepat ke seluruh dunia ke negara-negara lain seperti Italia, Iran, dan Spanyol yang merupakan negara-negara yang paling terpengaruh pandemi ini.

Peneliti di seluruh dunia berkolaborasi untuk menganalisis perilaku virus dan mengimplementasikan ide-ide baru untuk mengatasi krisis ini. Saat ini saya adalah kandidat Doktoral (PhD) di University of Western Australia dan spesialisasi saya adalah dalam bidang Kecerdasan Buatan (AI) dan Computer Vision (CV). Sebagai salah satu peneliti yang ingin untuk melakukan sesuatu, saya merasa wajib untuk menggunakan kemampuan saya dan bekerja sama dengan peneliti lain untuk menciptakan solusi yang bisa membantu kita semua.

Satu minggu lalu, saya pertama kali mengetahui melalui berita bahwa ketersediaan komponen pengujian COVID-19 [terbatas dan tidak dapat diproduksi dengan cepat](https://www.usatoday.com/story/news/2020/03/11/coronavirus-covid-19-response-hurt-by-shortage-testing-components/5013586002/), yang menyebabkan kekhawatiran di tengah masyarakat. Pada saat yang nyaris sama, saya melihat berita lain yang menjelaskan bagaimana Cina menggunakan [sistem berbasis AI untuk mempercepat proses diagnosis COVID-19 hanya dengan tomografi](https://www.bioworld.com/articles/433530-china-uses-ai-in-medical-imaging-to-speed-up-covid-19-diagnosis) dan x-ray. Namun, teknologi ini dan dataset lengkap yang digunakan belum dipublikasikan. Saya sangat meyakini bahwa salah satu kewajiban saya sebagai seorang peneliti PhD adalah mewujudkan demokratisasi penggunaan AI, terutama, saat berhubungan dengan aplikasi medis. Dengan alasan ini, saya memutuskan untuk berkontribusi dengan membuat sistem berbasis AI buatan saya sendiri yang dapat membedakan kasus COVID-19 dengan kasus normal dari pencitraan CT scan dan x-ray. Saat ini, sangat sulit untuk memperoleh data yang cukup untuk mereplikasi sistem seperti ini. Panduan nasional Cina merekomendasikan pencitraan CT scan sebagai metode kunci dalam mendiagnosis COVID-19, namun, sejauh ini [saya lebih banyak menemukan data publik yang tersedia menggunakan x-ray](https://github.com/ieee8023/covid-chestxray-dataset/blob/master/README.md?fbclid=IwAR30yTGBr55WXdCngCoICDENHycmdL2bGwlvl1ckdZM-ucjGH10Uakz7khk). Hal ini mungkin berubah di masa depan karena adanya komunitas internasional dan peneliti yang menginspirasi seperti Andre Esteva, PhD, yang baru seminggu lalu mulai mengumpulkan pencitraan x-ray COVID-19 dan membuat data tersebut tersedia secara umum untuk komunitas keilmuan.

**Detektor COVID-19 Menggunakan Kecerdasan Buatan (IA)**

Kecerdasan buatan (AI) mungkin terdengar seperti sebuah jargon popular semata bagi Anda atau sesuatu yang sangat rumit yang berasal dari buku sains fiksi. Kenyataannya, AI telah menjadi sebuah teknologi yang telah matang dengan potensi yang besar untuk memecahkan berbagai permasalahan di dunia nyata. Hal ini bisa diperoleh dengan menggunakan Jaringan Neural (Neural Network) yang diciptakan dengan menggabungkan neuron-neuron buatan. (Ya, Jaringan Neural adalah model yang terinspirasi biologi otak). Ini adalah teknologi yang sama yang digunakan dalam [mobil yang berkendara sendiri seperti Tesla](https://www.tesla.com/en_AU/autopilotAI) atau untuk [mendeteksi kanker payudara dengan bahkan lebih baik dari dokter](https://www.bloomberg.com/news/articles/2020-01-02/google-shows-ai-can-spot-breast-cancer-better-than-doctors).

Saya telah menciptakan model Jaringan Neural yang dapat memprediksi dengan tingkat akurasi 97.5% dari pencitraan x-ray apakah seseorang tertular virus COVID- 19 atau tidak. Dalam model ini, saya telah mencapai sensitivitas sebesar 100% dan spesifitas sebesar 94.5%. Model ini mungkin terdengar sangat menakjubkan! Akan tetapi, dataset yang digunakan masih sangat kecil, namun kami memiliki ahli radiologi yang sekarang bekerja sama dengan kami untuk memvalidasi model dan mengkurasi dataset. Maka pada saat ini, model ini masih jauh dari bisa digunakan dalam skala besar di rumah sakit mana pun. Sebenarnya, saya menyadari bahwa di beberapa negara, rumah sakit tidak diperbolehkan mengambil keputusan berdasarkan produk yang belum lolos standar uji yang ketat. Karena alasan ini, saya harus menyatakan Penafian yang besar sebelum melanjutkan:

PENAFIAN: Diharapkan untuk tidak menggunakan kode ini atau mengambil keputusan berdasarkan konten dalam unggahan ini tanpa persetujuan dokter. Alat ini ditujukan sebagai cara untuk membantu dokter dalam mempercepat proses triase atau/dan diagnosis. Dalam kondisi apa pun, kami tidak bermaksud untuk menggantikan dokter, namun hanya membantu mereka sebagai alat tambahan. Anggap AI sebagai padanan dari “Kecerdasan yang Ditingkatkan” atau “Kecerdasan yang Diperbantukan”. Risiko penggunaan alat ini ditanggung oleh pengguna. Pencipta dan kontributor alat ini tidak bertanggung jawab atas penyalahgunaan atau konsekuensi penggunaan alat ini atau informasi yang disediakan.

**Berikut adalah Cara Anda membantu**

Saya sedang mencari relawan untuk bekerja dengan saya dalam proyek ini dan harapannya, kita bisa membuat perbedaan dan menolong dunia dengan input kami. Pada saat ini ada banyak perusahaan pemerintah dan swasta yang sedang bekerja menghadapi permasalahan ini. Namun, tujuan utama saya adalah untuk membuat agar kode dan konten tersedia untuk semua orang untuk tujuan non-komersil. Saya ingin membuat teknologi ini tersedia secara gratis sehingga dapat digunakan di semua tempat di dunia untuk membantu para dokter dalam masa-masa sulit ini.

Penerjemah dan Copywriter: Kami sedang mencari orang-orang yang dapat menerjemahkan unggahan ini. Selain itu, jika ada orang yang bisa membantu kami menulis konten akan sangat diapresiasi.

Dokter: Jika Anda kenal dokter atau ahli radiologi yang dapat dan bersedia untuk menggunakan keahlian mereka untuk memvalidasi alat ini dan memberi kami pengetahuan lebih tentang bagaimana cara untuk memperbaruinya, tolong beri tahu kami! Sebagai pengguna utama, kami perlu keahlian dalam ranah mereka untuk memperbarui dan menggunakan proyek ini.

Pengembang Perangkat Lunak/Aplikasi Mobile: Kami bisa membuat situs web atau aplikasi mobile yang digerakkan teknologi kami yang ramah pengguna dan membuat pengguna bisa mengunggah pencitraan x-ray (atau CT scan pada masa yang akan datang) untuk memberikan diagnosis secara otomatis. Kami juga butuh orang untuk menulis dokumentasi proyek secara sesuai.

Semua Orang Lainnya: Jika Anda mengenal seseorang dalam daftar teman Anda yang memiliki kemampuan yang diperlukan dan mungkin bersedia untuk membantu proyek ini silakan hubungi saya. Akan sangat bagus juga jika Anda yakin bisa membantu dengan cara lain yang belum disebutkan di sini! Mungkin hanya dengan membagikan proyek ini kami bisa mencapai orang yang tepat untuk membantu kami.

El resto de personas: si conoces a alguien en tu lista de amigos que tenga las habilidades necesarias y que quiera ayudar con este proyecto, contáctame. Si crees que podrías ayudar de alguna otra manera que no se haya mencionado antes, ¡eso también es genial! Quizás solo compartiendo este proyecto con otros podamos llegar a las personas adecuadas para que nos ayuden.

**TENTANG SAYA**

Nama saya Camilo Pestana. Spesialisasi saya adalah Computer Vision dan penggunaan Kecerdasan Buatan untuk memecahkan permasalahan yang menarik.

**Hubungi Kami:**

Jika Anda ingin membantu kami atau berkolaborasi dengan cara apa pun dalam proyek ini silakan hubungi saya melalui:

LinkedIn:  [https://www.linkedin.com/in/camilo-pestana](https://www.linkedin.com/in/camilo-pestana)  Correo electrónico:  [camilo.pestanacardeno@research.uwa.edu.au](mailto:camilo.pestanacardeno@research.uwa.edu.au)

**LISENSI**

<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons Licence" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Detektor COVID-19</span> oleh <span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">Camilo Pestana</span> dilisensikan dalam Lisensi <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Lisensi Internasional Atribusi-Nonkomersial 4.0 Creative Commons</a>.
