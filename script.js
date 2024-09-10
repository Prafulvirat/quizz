const levels = {
   1: {
    "name": "Andhra Pradesh",
    "questions": [
        {
            "question": "What is the official language of Andhra Pradesh?",
            "options": ["Tamil", "Kannada", "Telugu", "Malayalam"],
            "answer": 2,
            "description": "Telugu is the official and widely spoken language in Andhra Pradesh and one of the classical languages of India."
        },
        {
            "question": "Which classical dance form originated from Andhra Pradesh?",
            "options": ["Bharatanatyam", "Kuchipudi", "Kathak", "Odissi"],
            "answer": 1,
            "description": "Kuchipudi is a classical dance form known for its graceful movements and strong narrative, originating in the village of Kuchipudi."
        },
        {
            "question": "Where is the famous Lord Venkateswara Temple located in Andhra Pradesh?",
            "options": ["Vijayawada", "Tirupati", "Visakhapatnam", "Guntur"],
            "answer": 1,
            "description": "The Venkateswara Temple in Tirumala, Tirupati, is one of the most visited pilgrimage sites globally, dedicated to Lord Vishnu."
        },
        {
            "question": "Amaravati is famous for which ancient Buddhist structure?",
            "options": ["Sanchi Stupa", "Nagarjuna Stupa", "Amaravati Stupa", "Dhamek Stupa"],
            "answer": 2,
            "description": "The Amaravati Stupa, a significant Buddhist site, is known for its impressive relics and sculptures from the Satavahana period."
        },
        {
            "question": "Which river is considered the lifeline of Andhra Pradesh?",
            "options": ["Krishna", "Kaveri", "Godavari", "Tungabhadra"],
            "answer": 2,
            "description": "The Godavari is the second-longest river in India and is crucial for irrigation and agriculture in Andhra Pradesh."
        },
        {
            "question": "The famous Kondapalli toys are made from which material?",
            "options": ["Clay", "Metal", "Wood", "Stone"],
            "answer": 2,
            "description": "Kondapalli toys are crafted from a special type of softwood and painted with natural dyes, known for their vibrant colors and intricate designs."
        },
        {
            "question": "What is the unique architectural feature of the Lepakshi Temple?",
            "options": ["Floating pillars", "Largest Nandi sculpture", "Hanging roof", "Underground temple"],
            "answer": 0,
            "description": "Lepakshi Temple is famous for its 'hanging pillar,' which doesn’t fully touch the ground, a marvel of ancient Indian engineering."
        },
        {
            "question": "Kuchipudi is a blend of which art forms?",
            "options": ["Music and Dance", "Music and Sculpture", "Dance and Dialogue", "Painting and Poetry"],
            "answer": 2,
            "description": "Kuchipudi is a dance-drama performance that includes both dance and dialogue, making it unique among classical dance forms."
        },
        {
            "question": "What is the new capital of Andhra Pradesh?",
            "options": ["Hyderabad", "Amaravati", "Visakhapatnam", "Vijayawada"],
            "answer": 2,
            "description": "As of 2023, Visakhapatnam was named the new executive capital of Andhra Pradesh, known for its port and beaches."
        },
        {
            "question": "Which saree from Andhra Pradesh is famous for its ikat patterns?",
            "options": ["Kanchipuram", "Pochampally", "Chanderi", "Banarasi"],
            "answer": 1,
            "description": "Pochampally sarees are renowned for their geometric ikat patterns, made using the traditional tie-dye method in the Bhoodan Pochampally region."
        },
        {
            "question": "What is the official state festival of Andhra Pradesh?",
            "options": ["Ugadi", "Pongal", "Diwali", "Onam"],
            "answer": 0,
            "description": "Ugadi marks the Telugu New Year and is celebrated with great enthusiasm across Andhra Pradesh with prayers, feasts, and cultural events."
        },
        {
            "question": "Which dynasty contributed significantly to the development of Telugu literature?",
            "options": ["Chola", "Vijayanagara", "Satavahana", "Kakatiya"],
            "answer": 3,
            "description": "The Kakatiya dynasty was instrumental in promoting Telugu literature, art, and architecture during its rule."
        },
        {
            "question": "Araku Valley, a famous hill station, is located in which district?",
            "options": ["East Godavari", "Visakhapatnam", "Guntur", "Krishna"],
            "answer": 1,
            "description": "Araku Valley is a scenic hill station known for its coffee plantations, tribal culture, and beautiful landscapes."
        },
        {
            "question": "What is the traditional painting art form of Andhra Pradesh?",
            "options": ["Kalamkari", "Tanjore", "Warli", "Madhubani"],
            "answer": 0,
            "description": "Kalamkari is a traditional art form where natural dyes are used to paint on fabric, often depicting scenes from mythology."
        },
        {
            "question": "Who is the famous Telugu poet associated with the translation of Mahabharata into Telugu?",
            "options": ["Nannaya Bhattaraka", "Tikkana", "Errana", "All of the above"],
            "answer": 3,
            "description": "Nannaya, Tikkana, and Errana are known as the 'Trinity of Telugu Poets' for their contribution to translating the Mahabharata into Telugu."
        },
        {
            "question": "Srisailam Temple in Andhra Pradesh is dedicated to which deity?",
            "options": ["Lord Vishnu", "Lord Shiva", "Goddess Durga", "Lord Ganesha"],
            "answer": 1,
            "description": "Srisailam Temple is a significant Jyotirlinga shrine dedicated to Lord Shiva, located in the Nallamala hills."
        },
        {
            "question": "Kanaka Durga Temple is located in which city?",
            "options": ["Tirupati", "Vijayawada", "Rajahmundry", "Guntur"],
            "answer": 1,
            "description": "The Kanaka Durga Temple in Vijayawada is a major pilgrimage site, especially during the festival of Dussehra."
        },
        {
            "question": "Which martial art form is traditional to Andhra Pradesh?",
            "options": ["Silambam", "Kalaripayattu", "Lathi", "Velakali"],
            "answer": 2,
            "description": "Lathi is a traditional martial art form practiced in Andhra Pradesh, involving the use of sticks for self-defense."
        },
        {
            "question": "The tribal festival 'Sammakka Saralamma Jatara' is celebrated in which region?",
            "options": ["Visakhapatnam", "Srikakulam", "Warangal", "Kadapa"],
            "answer": 2,
            "description": "Sammakka Saralamma Jatara is one of the largest tribal festivals in Telangana and parts of Andhra Pradesh, celebrating tribal deities."
        },
        {
            "question": "Who translated the 'Mahabharatam' into Telugu?",
            "options": ["Nannaya", "Tikkana", "Errana", "All of the above"],
            "answer": 3,
            "description": "The Telugu version of the Mahabharata was a collaborative effort by these three poets, each contributing to different sections."
        },
        {
            "question": "Which popular beach is located in Andhra Pradesh?",
            "options": ["Marina Beach", "Radhanagar Beach", "Rishikonda Beach", "Juhu Beach"],
            "answer": 2,
            "description": "Rishikonda Beach, located near Visakhapatnam, is known for its golden sands and calm waters, making it a popular tourist spot."
        },
        {
            "question": "On which riverbank is the Buddhist site of Nagarjunakonda located?",
            "options": ["Godavari", "Krishna", "Pennar", "Tungabhadra"],
            "answer": 1,
            "description": "Nagarjunakonda is an ancient Buddhist site located on the Krishna River, known for its rich collection of Buddhist relics."
        },
        {
            "question": "Which emperor was associated with the Satavahana dynasty in Andhra Pradesh?",
            "options": ["Gautamiputra Satakarni", "Pulakesin II", "Rajendra Chola", "Mahendravarman I"],
            "answer": 0,
            "description": "Gautamiputra Satakarni was a prominent emperor of the Satavahana dynasty, known for his contributions to the region's history and culture."
        }
    ]
},
  2:{
    "name": "Arunachal Pradesh",
    "questions": [
        {
            "question": "Which of the following festivals is celebrated by the Monpa community in Arunachal Pradesh?",
            "options": ["Losar", "Baisakhi", "Pongal", "Holi"],
            "answer": 0,
            "description": "Losar is a major festival celebrated by the Monpa people, marking the Tibetan New Year and celebrating with traditional dances and feasts."
        },
        {
            "question": "Which Arunachal Pradesh tribe is renowned for their unique facial tattoos?",
            "options": ["Konyak", "Bodo", "Mising", "Apatani"],
            "answer": 3,
            "description": "The Apatani tribe is known for their distinct facial tattoos, which are part of their traditional beauty practices."
        },
        {
            "question": "What is the traditional attire of the Apatani tribe of Arunachal Pradesh called?",
            "options": ["Phiran", "Mikir", "Naga shawl", "Naga headgear"],
            "answer": 0,
            "description": "The Apatani people traditionally wear a Phiran, a loose-fitting robe, which is often adorned with traditional accessories."
        },
        {
            "question": "Which Arunachal Pradesh festival is known for its elaborate mask dances and ritualistic performances?",
            "options": ["Bihu", "Solung", "Losar", "Tawang Festival"],
            "answer": 3,
            "description": "The Tawang Festival is famous for its vibrant mask dances and traditional performances, showcasing the rich cultural heritage of the region."
        },
        {
            "question": "The traditional dance form ‘Wangala’ is associated with which tribe of Arunachal Pradesh?",
            "options": ["Galo", "Khampti", "Adi", "Nishi"],
            "answer": 0,
            "description": "Wangala is a harvest festival dance performed by the Galo tribe, celebrating the end of the harvest season."
        },
        {
            "question": "Which of the following is a significant feature of the traditional architecture of the Mishing tribe?",
            "options": ["Stilt houses", "Stone cottages", "Bamboo huts", "Mud huts"],
            "answer": 0,
            "description": "The Mishing tribe is known for their stilt houses, which are elevated to protect against flooding and pests."
        },
        {
            "question": "What is the primary language spoken by the Monpa people of Arunachal Pradesh?",
            "options": ["Monpa", "Hindi", "Assamese", "English"],
            "answer": 0,
            "description": "The Monpa people primarily speak the Monpa language, which belongs to the Tibeto-Burman language family."
        },
        {
            "question": "Which Arunachal Pradesh tribe is known for their intricate handwoven shawls?",
            "options": ["Apatani", "Khampti", "Mishing", "Bodo"],
            "answer": 1,
            "description": "The Khampti tribe is renowned for their exquisite handwoven shawls, which are an important part of their traditional attire."
        },
        {
            "question": "The traditional festival 'Solung' is primarily celebrated by which tribe?",
            "options": ["Nyishi", "Adi", "Mishing", "Bodo"],
            "answer": 1,
            "description": "Solung is a major festival of the Adi tribe, celebrating the harvest season and involving various traditional rituals."
        },
        {
            "question": "Which Arunachal Pradesh festival marks the start of the New Year for the Adi tribe?",
            "options": ["Nyokum", "Chalo Loku", "Ziro Festival", "Saga Dawa"],
            "answer": 1,
            "description": "Chalo Loku is the New Year festival of the Adi tribe, celebrated with traditional dances, feasting, and community gatherings."
        },
        {
            "question": "Which traditional musical instrument is commonly used by the Mishing tribe during festivals?",
            "options": ["Drum", "Flute", "Guitar", "Sitar"],
            "answer": 0,
            "description": "The Mishing tribe frequently uses traditional drums, known as 'Dhol,' during their festival celebrations and cultural performances."
        },
        {
            "question": "Which Arunachal Pradesh tribe is known for their distinctive black clothing adorned with red patterns?",
            "options": ["Konyak", "Apatani", "Mishing", "Bodo"],
            "answer": 0,
            "description": "The Konyak tribe is known for their distinctive black clothing, which is often decorated with red patterns and symbols."
        },
        {
            "question": "What is the primary religion practiced by the Monpa people of Arunachal Pradesh?",
            "options": ["Buddhism", "Hinduism", "Christianity", "Islam"],
            "answer": 0,
            "description": "The Monpa people predominantly practice Buddhism, and their cultural practices are deeply influenced by Buddhist traditions."
        },
        {
            "question": "Which Arunachal Pradesh tribe is known for their vibrant and elaborate headdresses?",
            "options": ["Konyak", "Mishing", "Adi", "Nyishi"],
            "answer": 0,
            "description": "The Konyak tribe is known for their elaborate headdresses, which are worn during ceremonies and festivals."
        },
        {
            "question": "Which traditional event in Arunachal Pradesh involves the display of traditional weaponry and hunting skills?",
            "options": ["Losar", "Chalo Loku", "Tawang Festival", "Mopin"],
            "answer": 2,
            "description": "The Tawang Festival often includes demonstrations of traditional weaponry and hunting skills, showcasing the martial culture of the region."
        },
        {
            "question": "What is the traditional dance form associated with the Apatani tribe during festivals?",
            "options": ["Bamboo Dance", "Mask Dance", "Yak Dance", "War Dance"],
            "answer": 1,
            "description": "The Apatani tribe performs a traditional mask dance during their festivals, which is a significant aspect of their cultural heritage."
        },
        {
            "question": "Which Arunachal Pradesh festival involves worshiping the Sun God?",
            "options": ["Tawang Festival", "Nyokum", "Losar", "Bihu"],
            "answer": 1,
            "description": "Nyokum is a festival celebrated by the Nyishi tribe, which includes rituals and prayers to the Sun God for prosperity and good harvests."
        },
        {
            "question": "Which festival involves the worship of deities associated with agriculture and is celebrated by the Nyishi tribe?",
            "options": ["Nyokum", "Losar", "Ziro Festival", "Bihu"],
            "answer": 0,
            "description": "Nyokum is a major festival of the Nyishi tribe that involves rituals and prayers to deities associated with agriculture and good harvests."
        },
        {
            "question": "The traditional festival ‘Mopin’ is celebrated by which Arunachal Pradesh tribe?",
            "options": ["Nyishi", "Galo", "Mishing", "Khampti"],
            "answer": 2,
            "description": "Mopin is a major festival celebrated by the Mishing tribe, focusing on agricultural prosperity and community bonding."
        },
        {
            "question": "Which Arunachal Pradesh festival is celebrated with the creation of intricate rangoli patterns?",
            "options": ["Tawang Festival", "Solung", "Nyokum", "Baisakhi"],
            "answer": 1,
            "description": "Solung festival includes the creation of elaborate rangoli patterns, which are an integral part of the celebration for the Adi tribe."
        },
        {
            "question": "What is the name of the traditional bamboo dance performed by the Mishing tribe?",
            "options": ["Bodo Dance", "Bamboo Dance", "Cheraw Dance", "Dhol Dance"],
            "answer": 2,
            "description": "The Bamboo Dance, also known as 'Cheraw Dance,' is a traditional dance performed by the Mishing tribe, involving intricate footwork and rhythmic movements."
        },
        {
            "question": "Which traditional craft is practiced by the Mishing people?",
            "options": ["Pottery", "Weaving", "Metalwork", "Painting"],
            "answer": 1,
            "description": "Weaving is a traditional craft of the Mishing people, who are known for their intricate handwoven textiles and traditional clothing."
        },
        {
            "question": "The traditional ceremony ‘Chalo Loku’ is celebrated by which tribe?",
            "options": ["Mishing", "Adi", "Apatani", "Nyishi"],
            "answer": 1,
            "description": "Chalo Loku is a significant festival of the Adi tribe, marking the beginning of the harvest season with various traditional activities."
        }
    ]
},
  3:{
    name: "Assam",
    questions: [
        {
            question: "Which festival is celebrated as the Assamese New Year and involves traditional Bihu dance and feasting?",
            options: ["Bihu", "Pongal", "Lohri", "Holi"],
            answer: 0,
            description: "Bihu is the major festival in Assam marking the Assamese New Year, celebrated with traditional dance, music, and feasts."
        },
        {
            question: "What is the traditional dance form performed during Bihu festival in Assam?",
            options: ["Kathak", "Bhangra", "Bihu Dance", "Odissi"],
            answer: 2,
            description: "The Bihu Dance is a vibrant and energetic dance performed during the Bihu festival, showcasing Assamese culture and joy."
        },
        {
            question: "Which of the following is a traditional Assamese textile known for its intricate designs and patterns?",
            options: ["Kanjeevaram", "Banarasi", "Muga silk", "Khadi"],
            answer: 2,
            description: "Muga silk is a traditional Assamese textile known for its rich golden color and durability, used in various traditional garments."
        },
        {
            question: "Which Assamese festival is celebrated to mark the harvest season and is known for its traditional feasts and dances?",
            options: ["Bihu", "Makar Sankranti", "Lohri", "Onam"],
            answer: 0,
            description: "Bihu is celebrated to mark the harvest season in Assam, featuring traditional dances, feasts, and celebrations of agricultural prosperity."
        },
        {
            question: "Which traditional Assamese dish is made from fermented bamboo shoots and is a popular local delicacy?",
            options: ["Khar", "Pitha", "Bhurta", "Jalpaan"],
            answer: 0,
            description: "Khar is a traditional Assamese dish made from fermented bamboo shoots, adding a unique flavor to the regional cuisine."
        },
        {
            question: "The ancient temple of Kamakhya, a significant pilgrimage site, is located in which Assamese city?",
            options: ["Guwahati", "Jorhat", "Tezpur", "Dibrugarh"],
            answer: 0,
            description: "The Kamakhya Temple, a major Hindu pilgrimage site dedicated to the goddess Kamakhya, is located in Guwahati, Assam."
        },
        {
            question: "Which of the following is a popular Assamese folk art form that involves painting on bamboo and cane objects?",
            options: ["Pattachitra", "Madhubani", "Bamboo craft", "Warli"],
            answer: 2,
            description: "Bamboo craft is a traditional Assamese folk art involving intricate painting and carving on bamboo and cane items."
        },
        {
            question: "What is the primary language spoken in Assam?",
            options: ["Bengali", "Hindi", "Assamese", "Nepali"],
            answer: 2,
            description: "Assamese is the primary language spoken in Assam, serving as a key medium for communication and cultural expression in the region."
        },
        {
            question: "Which Assamese festival is dedicated to the worship of Lord Krishna and is celebrated with traditional dances and music?",
            options: ["Bihu", "Durga Puja", "Janmashtami", "Diwali"],
            answer: 2,
            description: "Janmashtami is celebrated in Assam to honor the birth of Lord Krishna, featuring devotional songs, dances, and rituals."
        },
        {
            question: "Which of the following is a traditional Assamese sweet made from rice flour and jaggery?",
            options: ["Sandesh", "Pitha", "Rasgulla", "Chamcham"],
            answer: 1,
            description: "Pitha is a traditional Assamese sweet made from rice flour and jaggery, enjoyed during various festivals and special occasions."
        },
        {
            question: "Which prominent river flows through Assam and is crucial to its agriculture and culture?",
            options: ["Yamuna", "Brahmaputra", "Ganges", "Godavari"],
            answer: 1,
            description: "The Brahmaputra River is vital to Assam, influencing its agriculture, culture, and daily life through its fertile plains and resources."
        },
        {
            question: "Which Assamese festival involves the preparation of traditional rice cakes and is celebrated with community gatherings?",
            options: ["Bihu", "Poush Mela", "Durga Puja", "Holi"],
            answer: 0,
            description: "Bihu involves making traditional rice cakes, called Pitha, and celebrating with community feasts and activities."
        },
        {
            question: "What is the name of the traditional Assamese boat race that is a popular event during the Bihu festival?",
            options: ["Japi", "Namami", "Naga Sangeet", "Gamosa"],
            answer: 1,
            description: "Boat races, known as 'Namami,' are a popular event during Bihu, showcasing traditional rowing skills and competitive spirit."
        },
        {
            question: "Which of the following is a traditional Assamese woven shawl often worn during festivals?",
            options: ["Jamdani", "Kullu", "Phiran", "Gamosa"],
            answer: 3,
            description: "The Gamosa is a traditional Assamese woven shawl, often worn during festivals and ceremonies, symbolizing respect and hospitality."
        },
        {
            question: "Which Assamese tribal community is known for their vibrant and colorful traditional attire and dances?",
            options: ["Bodos", "Mishing", "Karbi", "Khasi"],
            answer: 1,
            description: "The Mishing tribe is known for their colorful traditional attire and lively dances, reflecting their vibrant cultural heritage."
        },
        {
            question: "Which of the following is a prominent Assamese literary figure known for his contributions to Assamese literature and poetry?",
            options: ["Rupkonwar Jyoti Prasad Agarwala", "Bhabendra Nath Saikia", "Lakshminath Bezbaroa", "Homen Borgohain"],
            answer: 0,
            description: "Rupkonwar Jyoti Prasad Agarwala is a notable Assamese literary figure renowned for his contributions to Assamese literature and poetry."
        },
        {
            question: "Which Assamese festival is associated with the worship of the goddess of wealth and prosperity, Lakshmi?",
            options: ["Bihu", "Durga Puja", "Lakshmi Puja", "Diwali"],
            answer: 2,
            description: "Lakshmi Puja is celebrated in Assam to honor the goddess Lakshmi, symbolizing wealth and prosperity, often with elaborate rituals and offerings."
        },
        {
            question: "Which traditional Assamese art form involves intricate wood carving and is often used in temple decorations?",
            options: ["Pottery", "Bamboo craft", "Wood carving", "Textile weaving"],
            answer: 2,
            description: "Traditional Assamese wood carving is used extensively in temple decorations and crafting intricate designs on wooden objects."
        },
        {
            question: "Which Assamese festival celebrates the beginning of the new harvest season and involves a grand feast?",
            options: ["Rongali Bihu", "Magh Bihu", "Bohag Bihu", "Bhogali Bihu"],
            answer: 3,
            description: "Bohag Bihu, also known as Rongali Bihu, celebrates the beginning of the new harvest season with grand feasts and lively festivities."
        },
        {
            question: "Which Assamese handicraft involves weaving intricate patterns and designs on silk and cotton fabrics?",
            options: ["Pottery", "Weaving", "Metalwork", "Painting"],
            answer: 1,
            description: "Weaving is a traditional Assamese handicraft, known for producing exquisite patterns on silk and cotton fabrics, such as those seen in Muga silk."
        },
        {
            question: "What is the traditional Assamese system of communal farming called?",
            options: ["Bhoksa", "Kharif", "Jhum", "Pothar"],
            answer: 2,
            description: "Jhum farming is a traditional communal farming practice in Assam, involving shifting cultivation on hilly terrains."
        },
        {
            question: "Which traditional Assamese festival involves making and sharing of 'Pitha' (rice cakes) and is associated with the harvest?",
            options: ["Bihu", "Onam", "Makar Sankranti", "Baisakhi"],
            answer: 0,
            description: "During Bihu, traditional rice cakes known as 'Pitha' are made and shared, celebrating the harvest and the Assamese culture."
        },
        {
            question: "Which Assamese tradition involves the wearing of a distinctive red and white cloth, often seen in cultural ceremonies?",
            options: ["Sari", "Mekhela Chador", "Dupatta", "Langda"],
            answer: 1,
            description: "The Mekhela Chador is a traditional Assamese attire featuring a red and white cloth, commonly worn during cultural and ceremonial events."
        },
        {
            question: "Which prominent Assamese festival is celebrated to honor the victory of good over evil and involves elaborate decorations and rituals?",
            options: ["Durga Puja", "Bihu", "Holi", "Dussehra"],
            answer: 0,
            description: "Durga Puja is celebrated in Assam with elaborate decorations and rituals, symbolizing the triumph of good over evil."
        },
        {
            question: "Which Assamese traditional craft involves creating intricate designs on bamboo and cane items?",
            options: ["Pottery", "Bamboo and Cane Craft", "Embroidery", "Metalwork"],
            answer: 1,
            description: "Bamboo and Cane Craft is a traditional Assamese craft involving creating intricate designs on bamboo and cane items."
        }
    ]
  },
  4: {
    "name": "Bihar",
    "questions": [
        {
            "question": "Which river forms the eastern border of Bihar?",
            "options": ["Yamuna", "Ganges", "Brahmaputra", "Godavari"],
            "answer": 1,
            "description": "The Ganges River flows along the eastern border of Bihar, serving as a major geographical and cultural landmark in the state."
        },
        {
            "question": "Which historical site in Bihar was known for its role in the spread of Jainism?",
            "options": ["Nalanda", "Vaishali", "Bodh Gaya", "Patna"],
            "answer": 1,
            "description": "Vaishali is significant in Jainism as it was the birthplace of Lord Mahavira and a major center for the early Jain community."
        },
        {
            "question": "Which prominent leader from Bihar was a key figure in India's struggle for independence and later became the first President of India?",
            "options": ["Sri Krishna Sinha", "Rajendra Prasad", "Babu Jagjivan Ram", "Anugrah Narayan Sinha"],
            "answer": 1,
            "description": "Rajendra Prasad, a prominent leader from Bihar, played a significant role in India’s independence movement and was the first President of India."
        },
        {
            "question": "Which famous temple complex is located in the city of Gaya, Bihar?",
            "options": ["Mahabodhi Temple", "Vishnupad Temple", "Sun Temple", "Jagannath Temple"],
            "answer": 1,
            "description": "Vishnupad Temple in Gaya is an important Hindu pilgrimage site dedicated to Lord Vishnu and is known for its unique footprint sculpture."
        },
        {
            "question": "Which university in Bihar is known for its ancient Buddhist scholarship and learning?",
            "options": ["Nalanda University", "Banaras Hindu University", "Jawaharlal Nehru University", "Aligarh Muslim University"],
            "answer": 0,
            "description": "Nalanda University was a renowned ancient center of Buddhist learning and attracted scholars from across Asia."
        },
        {
            "question": "Which famous literary tradition from Bihar is recognized for its vibrant and intricate art form?",
            "options": ["Pattachitra", "Warli", "Madhubani", "Tanjore"],
            "answer": 2,
            "description": "Madhubani art from Bihar is known for its elaborate and colorful paintings, depicting mythological and folk themes."
        },
        {
            "question": "Which famous Indian poet and philosopher from Bihar wrote 'Madhushala'?",
            "options": ["Ramdhari Singh Dinkar", "Biharilal Khemka", "Harivansh Rai Bachchan", "Surajbhan Singh"],
            "answer": 2,
            "description": "Harivansh Rai Bachchan, a renowned poet from Bihar, is famous for his collection 'Madhushala,' which is celebrated for its philosophical depth and poetic beauty."
        },
        {
            "question": "Which famous historical figure, associated with the Maurya Empire, is known for his promotion of Buddhism?",
            "options": ["Chandragupta Maurya", "Ashoka the Great", "Bindusara", "Samudragupta"],
            "answer": 1,
            "description": "Ashoka the Great, the Mauryan emperor, is known for his support and propagation of Buddhism across his empire and beyond."
        },
        {
            "question": "Which major festival in Bihar involves offering prayers to the Sun God and is celebrated with rituals on riverbanks?",
            "options": ["Makar Sankranti", "Chhath Puja", "Holi", "Durga Puja"],
            "answer": 1,
            "description": "Chhath Puja is a significant festival in Bihar, dedicated to the worship of the Sun God, involving elaborate rituals and offerings."
        },
        {
            "question": "Which ancient Buddhist site in Bihar is known for its massive stupa and is a UNESCO World Heritage Site?",
            "options": ["Bodh Gaya", "Nalanda", "Rajgir", "Sarnath"],
            "answer": 0,
            "description": "Bodh Gaya is famous for the Mahabodhi Temple and the Bodhi Tree, where Buddha attained enlightenment, making it a UNESCO World Heritage Site."
        }
    ]
},
  5:{
    "name": "Chhattisgarh",
    "questions": [
        {
            "question": "Which festival is most commonly celebrated in Chhattisgarh?",
            "options": ["Diwali", "Pola", "Holi", "Navratri"],
            "answer": 1,
            "description": "Pola is a festival celebrated to honor the oxen and cattle in rural Chhattisgarh, marking the importance of animals in agricultural life."
        },
        {
            "question": "What is the traditional folk dance of Chhattisgarh?",
            "options": ["Bihu", "Pandavani", "Raut Nacha", "Lavani"],
            "answer": 2,
            "description": "Raut Nacha is a dance performed by the Yadav community during the festival of Diwali, celebrating their role as descendants of Lord Krishna."
        },
        {
            "question": "Which is the prominent tribal group in Chhattisgarh?",
            "options": ["Gond", "Bhil", "Santhal", "Khasi"],
            "answer": 0,
            "description": "The Gond tribe is one of the largest tribal communities in Chhattisgarh, known for their rich cultural heritage."
        },
        {
            "question": "What is the staple food of Chhattisgarh?",
            "options": ["Rice", "Wheat", "Maize", "Barley"],
            "answer": 0,
            "description": "Rice is the primary staple food of Chhattisgarh due to its vast paddy fields, and it features prominently in traditional dishes."
        },
        {
            "question": "Which folk music is famous in Chhattisgarh?",
            "options": ["Pandavani", "Lavani", "Baul", "Thumri"],
            "answer": 0,
            "description": "Pandavani is a traditional musical narrative that recounts the tales of the Mahabharata, especially about the Pandavas."
        },
        {
            "question": "Which art form is Chhattisgarh famous for?",
            "options": ["Madhubani", "Warli", "Bastar Art", "Pattachitra"],
            "answer": 2,
            "description": "Bastar Art, particularly known for its iron crafting (Dhokra art), reflects the unique artistic traditions of the tribal communities."
        },
        {
            "question": "What is the traditional attire for men in rural Chhattisgarh?",
            "options": ["Dhoti", "Kurta", "Sherwani", "Lungi"],
            "answer": 0,
            "description": "The Dhoti, a simple cloth wrapped around the waist, is traditionally worn by men in rural Chhattisgarh, especially during festivals."
        },
        {
            "question": "Which tribal dance is performed during the harvesting season?",
            "options": ["Saila", "Garba", "Kathak", "Bharatnatyam"],
            "answer": 0,
            "description": "Saila is a stick-dance performed by the tribal people of Chhattisgarh to celebrate the end of the harvesting season."
        },
        {
            "question": "What is the local language spoken in Chhattisgarh?",
            "options": ["Chhattisgarhi", "Marathi", "Hindi", "Bhojpuri"],
            "answer": 0,
            "description": "Chhattisgarhi is the widely spoken local language, a dialect of Hindi, reflecting the cultural identity of the state."
        },
        {
            "question": "Which dance is performed by the Muria tribe in Chhattisgarh?",
            "options": ["Panthi", "Muria Dance", "Kalbeliya", "Chau"],
            "answer": 1,
            "description": "Muria Dance is performed by the Muria tribe, representing their customs, beliefs, and social life through vigorous and energetic movements."
        },
        {
            "question": "What is the significance of the Bastar Dussehra?",
            "options": ["Celebrating the birth of Lord Rama", "Victory of Lord Krishna", "Worship of Devi Danteshwari", "Harvest festival"],
            "answer": 2,
            "description": "Bastar Dussehra is a 75-day festival celebrated to honor Devi Danteshwari, the presiding goddess of the region."
        },
        {
            "question": "Which form of craft is Chhattisgarh known for?",
            "options": ["Pottery", "Woodcraft", "Bell Metal Art", "Leatherwork"],
            "answer": 2,
            "description": "Bell Metal Art, also known as Dhokra, is a form of ancient metal casting practiced by the tribal communities of Bastar."
        },
        {
            "question": "What is the primary occupation of people in rural Chhattisgarh?",
            "options": ["Fishing", "Agriculture", "Textile Weaving", "Mining"],
            "answer": 1,
            "description": "Agriculture is the main occupation, with the majority of people in Chhattisgarh engaged in farming, particularly rice cultivation."
        },
        {
            "question": "Which dance represents the Satnami community in Chhattisgarh?",
            "options": ["Panthi", "Ghoomar", "Giddha", "Kathakali"],
            "answer": 0,
            "description": "Panthi dance is associated with the Satnami community and is performed during religious occasions, showcasing spiritual devotion."
        },
        {
            "question": "What is Chhattisgarh’s famous tribal jewelry made of?",
            "options": ["Gold", "Iron", "Silver", "Beads"],
            "answer": 3,
            "description": "Tribal jewelry in Chhattisgarh is often made of beads, combining colorful stones and seeds, reflecting the natural surroundings."
        },
        {
            "question": "Which festival in Chhattisgarh is celebrated to mark the new crop of paddy?",
            "options": ["Hareli", "Makar Sankranti", "Pongal", "Onam"],
            "answer": 0,
            "description": "Hareli is a local festival celebrating the arrival of the new rice crop, marked by prayers for a prosperous harvest."
        },
        {
            "question": "Which community primarily celebrates the Pola festival?",
            "options": ["Yadavs", "Brahmins", "Rajputs", "Fishermen"],
            "answer": 0,
            "description": "The Yadav community, traditionally involved in cattle rearing, celebrates Pola as a tribute to their cattle."
        },
        {
            "question": "Which food is commonly prepared during Chhattisgarh's festive seasons?",
            "options": ["Jalebi", "Bafauri", "Idli", "Dhokla"],
            "answer": 1,
            "description": "Bafauri, a healthy steamed snack made from chana dal, is often prepared during local festivals."
        },
        {
            "question": "Which instrument accompanies the Pandavani folk songs?",
            "options": ["Sitar", "Tambura", "Flute", "Tabla"],
            "answer": 1,
            "description": "The Tambura is a key instrument used in Pandavani performances, setting the rhythm for the musical storytelling."
        },
        {
            "question": "What is a traditional women’s outfit in Chhattisgarh?",
            "options": ["Ghagra Choli", "Saree", "Salwar Kameez", "Mekhla"],
            "answer": 1,
            "description": "Women in rural Chhattisgarh traditionally wear sarees, often in vibrant colors and distinct regional styles."
        },
        {
            "question": "Which dance is known as a symbol of joy and fertility?",
            "options": ["Karma", "Lavani", "Dandiya", "Bharatanatyam"],
            "answer": 0,
            "description": "Karma dance is performed to celebrate fertility and the harvest, symbolizing joy and gratitude toward nature."
        },
        {
            "question": "Which is the oldest tribal community in Chhattisgarh?",
            "options": ["Bhil", "Muria", "Baiga", "Santal"],
            "answer": 2,
            "description": "The Baiga tribe is considered one of the oldest indigenous groups in Chhattisgarh, known for their deep connection to nature."
        },
        {
            "question": "What does the Chhattisgarhi dish 'Fara' consist of?",
            "options": ["Wheat flour", "Rice flour", "Maize flour", "Lentils"],
            "answer": 1,
            "description": "Fara is a traditional dish made from rice flour, often served as a snack during local festivals."
        },
        {
            "question": "Which dance is performed by women during the Teeja festival?",
            "options": ["Sua Nacha", "Kathak", "Bharatnatyam", "Bhangra"],
            "answer": 0,
            "description": "Sua Nacha is a women’s dance performed during Teeja, a festival dedicated to the welfare of husbands and family."
        },
        {
            "question": "What is the traditional wooden musical instrument in Chhattisgarh?",
            "options": ["Flute", "Mandar", "Ektara", "Dhol"],
            "answer": 1,
            "description": "The Mandar is a wooden drum used in various folk dances and religious events in Chhattisgarh."
        }
    ]
},
  6:{
    "name": "Goa",
    "questions": [
        {
            "question": "Which of the following festivals is most prominently celebrated in Goa?",
            "options": ["Diwali", "Carnival", "Holi", "Pongal"],
            "answer": 1,
            "description": "Goa's Carnival is a vibrant, pre-Lenten festival featuring colorful parades, music, dance, and elaborate costumes. It reflects the rich Portuguese heritage and is one of the most significant celebrations in Goa."
        },
        {
            "question": "The famous architectural style of churches in Goa, including the Basilica of Bom Jesus, is known as:",
            "options": ["Gothic", "Baroque", "Romanesque", "Renaissance"],
            "answer": 1,
            "description": "The Baroque style is characterized by its elaborate and detailed decoration. The Basilica of Bom Jesus, with its ornate façade and intricate interiors, exemplifies this style of architecture."
        },
        {
            "question": "Which of the following is a traditional Goan dish made from rice, coconut, and jaggery?",
            "options": ["Vindaloo", "Xacuti", "Bebinca", "Sorpotel"],
            "answer": 2,
            "description": "Bebinca is a traditional Goan dessert made from layers of coconut milk, sugar, and eggs. It is a popular sweet dish often served during festivals and special occasions."
        },
        {
            "question": "The traditional dance form 'Dekhnni' in Goa is associated with which of the following?",
            "options": ["Hindu religious ceremonies", "Portuguese influence", "Tribal rituals", "Agricultural festivals"],
            "answer": 1,
            "description": "Dekhnni is a dance form that reflects the fusion of Portuguese and Goan cultures. It often features themes of romance and humorous storytelling, performed predominantly by women."
        },
        {
            "question": "Which Goan festival marks the beginning of Lent and is known for its colorful parades and costumes?",
            "options": ["Shigmo", "Ganesh Chaturthi", "Diwali", "Carnival"],
            "answer": 3,
            "description": "The Carnival is celebrated just before Lent begins and includes vibrant parades, music, dancing, and various festivities, reflecting Goa's Portuguese colonial history."
        },
        {
            "question": "Which of the following is a prominent Portuguese architectural influence found in Goa?",
            "options": ["Fort Aguada", "Se Cathedral", "Chapora Fort", "St. Cajetan's Church"],
            "answer": 3,
            "description": "St. Cajetan's Church is a prime example of Portuguese Baroque architecture in Goa, known for its grand façade and detailed interior, reflecting the colonial influence on Goan church architecture."
        },
        {
            "question": "The Goan tradition of 'Feni' is an alcoholic beverage made from:",
            "options": ["Coconut sap", "Rice", "Cashew apples", "Sugarcane"],
            "answer": 2,
            "description": "Feni is a traditional Goan spirit distilled from cashew apples or coconut sap. It is a unique local beverage with strong cultural significance in Goa."
        },
        {
            "question": "The Goan traditional art form known for its intricate designs and use of natural dyes is called:",
            "options": ["Madhubani", "Warli", "Paithani", "Ganapati"],
            "answer": 1,
            "description": "Warli painting is a traditional art form from the Warli tribe in Maharashtra and parts of Goa. It uses geometric patterns and natural dyes to depict everyday life and nature."
        },
        {
            "question": "Which language, besides Konkani, is commonly spoken in Goa due to its Portuguese influence?",
            "options": ["Marathi", "Kannada", "Portuguese", "Tamil"],
            "answer": 2,
            "description": "Portuguese, once the official language of Goa during colonial rule, still influences the local culture and is spoken by some Goans, especially in older generations."
        },
        {
            "question": "The 'Sao Joao' festival in Goa celebrates:",
            "options": ["The harvest season", "The birth of St. John the Baptist", "The end of the monsoon", "The festival of lights"],
            "answer": 1,
            "description": "Sao Joao is celebrated to honor St. John the Baptist with local festivities including jumping into wells and rivers, and vibrant community gatherings."
        },
        {
            "question": "The 'Shigmo' festival in Goa is primarily celebrated by which community?",
            "options": ["Catholics", "Hindus", "Muslims", "Buddhists"],
            "answer": 1,
            "description": "Shigmo is a Hindu festival celebrated with traditional dances, music, and processions. It marks the end of winter and the onset of spring, reflecting Goan Hindu traditions."
        },
        {
            "question": "The traditional Goan dance form 'Fugdi' is performed primarily by:",
            "options": ["Men", "Women", "Children", "Elders"],
            "answer": 1,
            "description": "Fugdi is a traditional dance performed by Goan women, characterized by rhythmic clapping and circular movements, usually during festive occasions and community gatherings."
        },
        {
            "question": "Which of the following is a famous beach in Goa known for its vibrant nightlife?",
            "options": ["Palolem Beach", "Calangute Beach", "Anjuna Beach", "Baga Beach"],
            "answer": 3,
            "description": "Baga Beach is renowned for its lively nightlife, with numerous bars, clubs, and beach shacks offering entertainment throughout the night."
        },
        {
            "question": "Which traditional Goan craft involves intricate beadwork and embroidery?",
            "options": ["Pottery", "Crochet", "Embroidery", "Handloom weaving"],
            "answer": 2,
            "description": "Goan embroidery, often used in traditional garments, involves detailed needlework and beadwork, reflecting the region's artistic heritage and craftsmanship."
        },
        {
            "question": "The Goan traditional practice of 'Kunbi' weaving is associated with which type of textile?",
            "options": ["Cotton", "Silk", "Wool", "Synthetic fibers"],
            "answer": 0,
            "description": "Kunbi weaving is a traditional technique used to create cotton textiles, often featuring distinctive patterns and used in traditional Goan attire."
        },
        {
            "question": "Which Portuguese-built fort in Goa offers panoramic views of the Arabian Sea?",
            "options": ["Fort Aguada", "Fort Chapora", "Fort Reis Magos", "Fort Candolim"],
            "answer": 0,
            "description": "Fort Aguada, built by the Portuguese, provides stunning views of the Arabian Sea and played a significant role in coastal defense during colonial times."
        },
        {
            "question": "The Goan dish 'Sorpotel' is primarily made from which type of meat?",
            "options": ["Chicken", "Pork", "Fish", "Lamb"],
            "answer": 1,
            "description": "Sorpotel is a spicy Goan dish made from pork, often prepared with a mix of vinegar, spices, and sometimes liver, commonly served during festive occasions."
        },
        {
            "question": "Which Goan festival is characterized by colorful parades and traditional dance performances?",
            "options": ["Ganesh Chaturthi", "Diwali", "Shigmo", "Christmas"],
            "answer": 2,
            "description": "Shigmo is a vibrant festival celebrated with colorful parades, traditional dances, and music, marking the arrival of spring and the end of the winter season."
        },
        {
            "question": "The 'Santoshi Mata' festival in Goa is celebrated to honor which deity?",
            "options": ["Ganesha", "Santoshi Mata", "Krishna", "Durga"],
            "answer": 1,
            "description": "Santoshi Mata is a popular Hindu goddess associated with satisfaction and contentment. The festival is observed with prayers and rituals dedicated to her."
        },
        {
            "question": "Which of the following is a popular Goan musical instrument used in traditional dances?",
            "options": ["Tabla", "Dholak", "Ghumot", "Sitar"],
            "answer": 2,
            "description": "The Ghumot is a traditional Goan percussion instrument made from clay, used in various cultural performances and religious ceremonies."
        },
        {
            "question": "The famous 'Mando' music genre in Goa is known for its:",
            "options": ["Energetic beats", "Melancholic and romantic themes", "Religious hymns", "Instrumental compositions"],
            "answer": 1,
            "description": "Mando music is a traditional Goan genre with soft, romantic, and melancholic themes, often accompanied by violin and guitar, reflecting the region's musical heritage."
        },
        {
            "question": "The Goan dance 'Dhalo' is traditionally performed during which festival?",
            "options": ["Ganesh Chaturthi", "Carnival", "Diwali", "Shigmo"],
            "answer": 3,
            "description": "Dhalo is a traditional Goan dance performed by women during the Shigmo festival, characterized by graceful movements and rhythmic clapping."
        },
        {
            "question": "The Goan traditional practice of 'Tandoor' cooking is associated with:",
            "options": ["Baking bread", "Grilling meats", "Steaming rice", "Making desserts"],
            "answer": 1,
            "description": "Tandoor cooking involves grilling meats and other items in a clay oven, a technique that adds a distinct flavor and is widely used in Goan cuisine."
        },
        {
            "question": "Which Goan coastal town is known for its vibrant and historical Portuguese architecture?",
            "options": ["Vasco da Gama", "Panaji", "Margao", "Old Goa"],
            "answer": 3,
            "description": "Old Goa is renowned for its well-preserved Portuguese colonial architecture, including churches and convents, reflecting the rich historical heritage of the region."
        },
        {
            "question": "Which famous Goan heritage site is known for its well-preserved ruins and ancient temples?",
            "options": ["Basilica of Bom Jesus", "Church of St. Cajetan", "St. Augustine Tower", "Se Cathedral"],
            "answer": 2,
            "description": "The St. Augustine Tower is a historic site with impressive ruins that once formed part of a large church and convent complex, showcasing the grandeur of Portuguese architecture."
        },
        {
            "question": "Which Goan festival is celebrated with the traditional dance form 'Goff' performed in the streets?",
            "options": ["Diwali", "Christmas", "Carnival", "Ganesh Chaturthi"],
            "answer": 2,
            "description": "Goff is a traditional dance performed during the Carnival festival, featuring vibrant costumes and lively movements, adding to the festive atmosphere."
        },
        {
            "question": "The traditional Goan dance 'Konkani' is performed during which of the following?",
            "options": ["Weddings", "Harvest festivals", "Religious ceremonies", "Family gatherings"],
            "answer": 1,
            "description": "Konkani dance is performed during harvest festivals and agricultural celebrations, reflecting the local customs and joy associated with successful harvests."
        },
        {
            "question": "Which Goan dish, made from a blend of spices, vinegar, and pork, is often served during festive occasions?",
            "options": ["Xacuti", "Vindaloo", "Bebinca", "Pulao"],
            "answer": 1,
            "description": "Vindaloo is a spicy Goan dish made from pork marinated in vinegar and a blend of spices, commonly enjoyed during festivals and special events."
        },
        {
            "question": "The traditional Goan festival 'Diwali' is known for which special activity?",
            "options": ["Burning effigies", "Lighting oil lamps and fireworks", "Offering prayers at temples", "Dancing around bonfires"],
            "answer": 1,
            "description": "Diwali, also known as the Festival of Lights, is celebrated in Goa with the lighting of oil lamps (diyas) and fireworks, symbolizing the victory of light over darkness."
        },
        {
            "question": "Which Goan heritage site is renowned for its colorful murals and frescoes depicting Biblical scenes?",
            "options": ["Church of St. Cajetan", "Se Cathedral", "Basilica of Bom Jesus", "Church of St. Augustine"],
            "answer": 2,
            "description": "The Basilica of Bom Jesus is famous for its well-preserved Baroque architecture and its interiors adorned with colorful murals and frescoes depicting Biblical scenes, reflecting the artistic heritage of the period."
        }
    ]
},
7:  {
      "name": "Gujarat",
      "questions": [
        {
          "question": "Which city in Gujarat is known as the 'Manchester of India' for its textile industry?",
          "options": ["Rajkot", "Ahmedabad", "Surat", "Vadodara"],
          "answer": "Ahmedabad",
          "explanation": "Known as the 'Manchester of India,' Ahmedabad has a rich history in textile production."
        },
        {
          "question": "Which Gujarati festival is celebrated by performing the traditional dance of Garba?",
          "options": ["Diwali", "Navratri", "Holi", "Uttarayan"],
          "answer": "Navratri",
          "explanation": "Navratri is celebrated with the vibrant Garba dance to honor Goddess Durga."
        },
        {
          "question": "Which temple in Gujarat is considered one of the 12 Jyotirlingas of Lord Shiva?",
          "options": ["Somnath Temple", "Dwarkadhish Temple", "Akshardham Temple", "Ambaji Temple"],
          "answer": "Somnath Temple",
          "explanation": "Somnath Temple is one of the 12 Jyotirlingas of Lord Shiva and a symbol of Gujarat's resilience."
        },
        {
          "question": "What is the famous Gujarati snack made from gram flour and yogurt, typically served with chutney?",
          "options": ["Dhokla", "Khandvi", "Fafda", "Thepla"],
          "answer": "Dhokla",
          "explanation": "Dhokla is a steamed savory cake made from gram flour and yogurt."
        },
        {
          "question": "Which UNESCO World Heritage Site in Gujarat is known for its intricate stone carvings and was built as a stepwell?",
          "options": ["Rani ki Vav", "Sabarmati Ashram", "Modhera Sun Temple", "Laxmi Vilas Palace"],
          "answer": "Rani ki Vav",
          "explanation": "Rani ki Vav is known for its detailed carvings and historical significance."
        },
        {
          "question": "Which city in Gujarat is home to the famous Dwarkadhish Temple, dedicated to Lord Krishna?",
          "options": ["Dwarka", "Somnath", "Bhavnagar", "Rajkot"],
          "answer": "Dwarka",
          "explanation": "Dwarka is home to the Dwarkadhish Temple, a major pilgrimage site for devotees of Lord Krishna."
        },
        {
          "question": "What is the traditional Gujarati dish made from rice and lentils, often served with ghee?",
          "options": ["Khichdi", "Dabeli", "Undhiyu", "Fafda"],
          "answer": "Khichdi",
          "explanation": "Khichdi is a comforting dish made from rice and lentils, typically served with ghee."
        },
        {
          "question": "Which Gujarat wildlife sanctuary is the last refuge of the Asiatic lion?",
          "options": ["Gir National Park", "Blackbuck National Park", "Velavadar National Park", "Marine National Park"],
          "answer": "Gir National Park",
          "explanation": "Gir National Park is the only place in the world where Asiatic lions are found in the wild."
        },
        {
          "question": "Which Gujarati festival celebrates the arrival of the new harvest and is marked by flying kites?",
          "options": ["Navratri", "Diwali", "Uttarayan", "Holi"],
          "answer": "Uttarayan",
          "explanation": "Uttarayan, or the Kite Festival, celebrates the new harvest with colorful kites."
        },
        {
          "question": "Which Gujarati ruler founded the city of Ahmedabad in 1411?",
          "options": ["Siddharaj Jaisinh", "Bhimdev Solanki", "Ahmed Shah I", "Karan Dev"],
          "answer": "Ahmed Shah I",
          "explanation": "Sultan Ahmed Shah founded Ahmedabad in 1411, shaping the city into a major center of Gujarat."
        },
        {
          "question": "Which salt marsh area in Gujarat is famous for its unique landscape and hosts the annual Rann Utsav?",
          "options": ["Rann of Kutch", "Little Rann of Kutch", "Gir Forest", "Velavadar National Park"],
          "answer": "Rann of Kutch",
          "explanation": "The Rann of Kutch is known for its vast salt marsh and hosts the Rann Utsav, a cultural festival."
        }
      ]
    },
    8: {
      "name": "Haryana",
      "questions": [
        {
          "question": "Which festival in Haryana is celebrated to mark the harvest season and features the traditional dance form of 'Gidda'?",
          "options": ["Diwali", "Baisakhi", "Lohri", "Teej"],
          "answer": "Baisakhi",
          "explanation": "Baisakhi marks the harvest season and features dances like Gidda and Bhangra."
        },
        {
          "question": "Which dance form from Haryana is traditionally performed by women during festivals and special occasions?",
          "options": ["Kathak", "Gidda", "Bharatnatyam", "Odissi"],
          "answer": "Gidda",
          "explanation": "Gidda is a traditional dance performed by women, known for its lively movements during festivals."
        },
        {
          "question": "The traditional Haryanvi attire for men, consisting of a long shirt and a turban, is called:",
          "options": ["Kurta-Pajama", "Dhoti-Kurta", "Sherwani", "Lungi"],
          "answer": "Dhoti-Kurta",
          "explanation": "Dhoti-Kurta is the traditional attire for men in Haryana, often worn with a turban."
        },
        {
          "question": "Which of the following is a traditional Haryanvi dish made from fermented wheat and commonly enjoyed as a staple food?",
          "options": ["Paratha", "Chappal", "Khichdi", "Bajra Roti"],
          "answer": "Bajra Roti",
          "explanation": "Bajra Roti is a staple Haryanvi bread made from pearl millet."
        },
        {
          "question": "Which festival in Haryana is dedicated to the worship of the goddess Durga and is marked by elaborate rituals and processions?",
          "options": ["Diwali", "Holi", "Navratri", "Ganesh Chaturthi"],
          "answer": "Navratri",
          "explanation": "Navratri is dedicated to Goddess Durga and features rituals and processions."
        },
        {
          "question": "The traditional Haryanvi folk song 'Ragini' is typically performed during:",
          "options": ["Marriage ceremonies", "Harvest festivals", "Religious ceremonies", "Funerals"],
          "answer": "Marriage ceremonies",
          "explanation": "Ragini is a folk song performed during marriages, known for its emotional and storytelling aspects."
        },
        {
          "question": "Which Haryanvi festival involves the preparation and sharing of sweets like 'Ghevar' and 'Kachoris'?",
          "options": ["Teej", "Lohri", "Holi", "Diwali"],
          "answer": "Diwali",
          "explanation": "Diwali is celebrated with sweets like Ghevar and Kachoris, along with lighting lamps."
        },
        {
          "question": "Which traditional dance form from Haryana is performed by men and involves vigorous movements and rhythmic beats?",
          "options": ["Kathak", "Bhangra", "Dandia", "Haryanvi Dance"],
          "answer": "Haryanvi Dance",
          "explanation": "Haryanvi Dance involves vigorous movements and is performed during cultural events."
        },
        {
          "question": "The 'Teej' festival in Haryana is celebrated by women to mark:",
          "options": ["The harvest season", "The onset of monsoon", "The New Year", "The victory of good over evil"],
          "answer": "The onset of monsoon",
          "explanation": "Teej marks the onset of the monsoon season and is celebrated with traditional rituals and dances."
        },
        {
          "question": "Which traditional Haryanvi dish is made from curd and gram flour, often enjoyed as a side dish or snack?",
          "options": ["Chaas", "Pakoras", "Kadhi", "Aloo Paratha"],
          "answer": "Kadhi",
          "explanation": "Kadhi is a dish made from curd and gram flour, enjoyed with rice or roti."
        }
      ]
    },
    9:{
    "name": "Himachal Pradesh",
    "questions": [
        {
            "question": "Which of the following is the traditional dance form of Himachal Pradesh?",
            "options": ["Bhangra", "Nati", "Garba", "Kathakali"],
            "answer": 1,
            "description": "Nati is a slow, graceful folk dance performed during festivals in Himachal Pradesh, particularly in Kullu and Shimla. It is even recognized in the Guinness World Records as the largest folk dance."
        },
        {
            "question": "Which is the most famous festival celebrated in Kullu Valley?",
            "options": ["Diwali", "Dussehra", "Lohri", "Baisakhi"],
            "answer": 1,
            "description": "Kullu Dussehra is a week-long celebration known worldwide. It starts when Dussehra elsewhere ends and includes processions of local deities and cultural festivities."
        },
        {
            "question": "Which Himachali painting style is well-known for depicting themes of love and devotion?",
            "options": ["Warli", "Kangra", "Madhubani", "Pattachitra"],
            "answer": 1,
            "description": "Kangra paintings, originating from the Kangra Valley, are known for their intricate brushwork and often depict stories from Hindu epics, especially focusing on Radha and Krishna."
        },
        {
            "question": "What is Siddu?",
            "options": ["A dance form", "A traditional food", "A type of clothing", "A musical instrument"],
            "answer": 1,
            "description": "Siddu is a traditional Himachali dish made from wheat flour, often filled with potatoes or peas, steamed, and served with ghee. It is commonly eaten during winter."
        },
        {
            "question": "Which district of Himachal Pradesh is famous for its apples?",
            "options": ["Kangra", "Shimla", "Lahaul", "Mandi"],
            "answer": 1,
            "description": "Shimla and its surrounding districts like Kinnaur are known for high-quality apples. The apple orchards in these areas are significant to the state's economy."
        },
        {
            "question": "In which style are many temples in Himachal Pradesh built?",
            "options": ["Dravidian", "Nagara", "Pagoda", "Gothic"],
            "answer": 2,
            "description": "Pagoda-style architecture is common in Himachal Pradesh, particularly in the wooden temples of Kullu and Mandi regions. This style is influenced by Tibetan and Nepalese designs."
        },
        {
            "question": "Chamba Rumal, a traditional handicraft of Himachal Pradesh, is what?",
            "options": ["A musical instrument", "An embroidered cloth", "A dance costume", "A type of food"],
            "answer": 1,
            "description": "The Chamba Rumal is an embroidered handkerchief with intricate designs. It originated in the Chamba region and is recognized with a Geographical Indication (GI) tag."
        },
        {
            "question": "Which river is referred to as the 'lifeline of Himachal Pradesh'?",
            "options": ["Yamuna", "Sutlej", "Beas", "Ravi"],
            "answer": 2,
            "description": "The Beas River is crucial for agriculture and hydroelectric power in Himachal Pradesh. It flows through the central region of the state and originates from the Rohtang Pass."
        },
        {
            "question": "Which of the following is a famous traditional fair of Himachal Pradesh?",
            "options": ["Pushkar Fair", "Mandi Shivratri Fair", "Surajkund Fair", "Kumbh Mela"],
            "answer": 1,
            "description": "The Mandi Shivratri Fair is a prominent seven-day event held in Mandi, Himachal Pradesh, where devotees bring their local deities for grand processions."
        },
        {
            "question": "Which instrument is traditionally played in Himachal Pradesh during folk performances?",
            "options": ["Sitar", "Dhol", "Algoza", "Santoor"],
            "answer": 1,
            "description": "The dhol is a traditional percussion instrument used in Himachali folk performances to add rhythm to dances like Nati and Kharati and is essential for cultural celebrations."
        },
        {
            "question": "Which temple in Himachal Pradesh is dedicated to Hidimba, a character from the Mahabharata?",
            "options": ["Jakhoo Temple", "Hidimba Devi Temple", "Baijnath Temple", "Jwala Ji Temple"],
            "answer": 1,
            "description": "The Hidimba Devi Temple in Manali is dedicated to Hidimba, the wife of Bhima from the Mahabharata. It is renowned for its unique wooden architecture and is surrounded by cedar forests."
        },
        {
            "question": "What is the traditional woolen fabric woven in Himachal Pradesh known as?",
            "options": ["Khadi", "Kullu Shawl", "Pashmina", "Bandhani"],
            "answer": 1,
            "description": "Kullu Shawls are handwoven woolen fabrics featuring intricate geometric designs. They are popular in Himachal Pradesh for their warmth and aesthetic appeal, especially during winter."
        },
        {
            "question": "Which of the following is a prominent monastery located in Himachal Pradesh?",
            "options": ["Hemis Monastery", "Tabo Monastery", "Rumtek Monastery", "Thiksey Monastery"],
            "answer": 1,
            "description": "Tabo Monastery, located in the Spiti Valley, is one of India's oldest monasteries, dating back to 996 AD. It is an important center for Tibetan Buddhism and is known for its ancient murals and sculptures."
        },
        {
            "question": "Which Himachali dance is performed to celebrate harvest?",
            "options": ["Ghoomar", "Bihu", "Jhora", "Dangi"],
            "answer": 2,
            "description": "Jhora is a traditional group dance performed in Himachal Pradesh during the harvest season, celebrated in a circle by men and women dancing rhythmically."
        },
        {
            "question": "Which famous hill station is known as the 'Queen of Hills'?",
            "options": ["Dalhousie", "Mussoorie", "Shimla", "Manali"],
            "answer": 2,
            "description": "Shimla, the capital of Himachal Pradesh, is often referred to as the 'Queen of Hills' due to its scenic beauty and pleasant climate. It was also the summer capital of British India."
        },
        {
            "question": "What is the state animal of Himachal Pradesh?",
            "options": ["Snow Leopard", "Red Panda", "Brown Bear", "Musk Deer"],
            "answer": 3,
            "description": "The musk deer is the state animal of Himachal Pradesh, known for its scent glands used in making perfumes. It is primarily found in the Himalayan regions."
        },
        {
            "question": "What is the state flower of Himachal Pradesh?",
            "options": ["Rhododendron", "Lotus", "Hibiscus", "Tulip"],
            "answer": 0,
            "description": "The Rhododendron, with its bright red or pink blossoms, is the state flower of Himachal Pradesh. It grows abundantly in the mountainous regions of the state."
        },
        {
            "question": "Which tribe in Himachal Pradesh is known for its pastoral lifestyle?",
            "options": ["Bhutia", "Gaddi", "Santhal", "Toda"],
            "answer": 1,
            "description": "The Gaddi tribe is known for its pastoral lifestyle, living in the Dhauladhar range and migrating with their flocks to higher altitudes during summer."
        },
        {
            "question": "Which place in Himachal Pradesh is famous for hot springs?",
            "options": ["Dalhousie", "Kasauli", "Manikaran", "Kullu"],
            "answer": 2,
            "description": "Manikaran is renowned for its natural hot springs, believed to have healing properties. It is also a pilgrimage site for Sikhs and Hindus, located in the Parvati Valley."
        },
        {
            "question": "What is the traditional architecture of Himachali houses called?",
            "options": ["Kath-Kuni", "Haveli", "Shikhara", "Jharokha"],
            "answer": 0,
            "description": "Kath-Kuni is a traditional architectural style in Himachal Pradesh, characterized by alternating layers of wood and stone. This design is earthquake-resistant and commonly seen in Kullu and Kinnaur districts."
        },
        {
            "question": "Which of the following lakes is the largest in Himachal Pradesh?",
            "options": ["Rewalsar Lake", "Dal Lake", "Chandra Tal", "Gobind Sagar Lake"],
            "answer": 3,
            "description": "Gobind Sagar Lake is the largest man-made reservoir in Himachal Pradesh, created by the Bhakra Dam on the Sutlej River. It is important for irrigation and hydroelectric power."
        }
    ]
},
    10:{
    "name": "Jharkhand",
    "questions": [
        {
            "question": "What is the official language of Jharkhand?",
            "options": ["Hindi", "Santali", "Urdu", "Bengali"],
            "answer": 0,
            "description": "Hindi is the official language of Jharkhand, although other regional languages like Santali, Bengali, and Urdu are also spoken widely."
        },
        {
            "question": "Which tribe is indigenous to Jharkhand and known for its rich cultural traditions?",
            "options": ["Bhil", "Santhal", "Gond", "Munda"],
            "answer": 1,
            "description": "The Santhal tribe is one of the largest tribal communities in Jharkhand and has a vibrant cultural heritage, including folk songs, dances, and festivals."
        },
        {
            "question": "What is the traditional dance form of Jharkhand’s tribal communities?",
            "options": ["Bharatanatyam", "Chhau", "Kathakali", "Bihu"],
            "answer": 1,
            "description": "Chhau is a traditional martial arts-based dance form practiced in Jharkhand, Odisha, and West Bengal, often featuring themes from mythology."
        },
        {
            "question": "Which festival is celebrated by the tribal people of Jharkhand to mark the new agricultural cycle?",
            "options": ["Holi", "Sohrai", "Baisakhi", "Pongal"],
            "answer": 1,
            "description": "Sohrai is a harvest festival celebrated by the tribes of Jharkhand. It is held after the harvest of paddy and is associated with cattle worship and fertility."
        },
        {
            "question": "What is the major religion followed by the tribal people of Jharkhand?",
            "options": ["Hinduism", "Christianity", "Sarnaism", "Islam"],
            "answer": 2,
            "description": "Sarnaism is the indigenous faith of the tribal people of Jharkhand, which revolves around nature worship, particularly of trees, rivers, and hills."
        },
        {
            "question": "Which traditional Jharkhand painting is done on the walls during festivals like Sohrai and Khovar?",
            "options": ["Madhubani", "Warli", "Pattachitra", "Sohrai Art"],
            "answer": 3,
            "description": "Sohrai art is a traditional form of painting done by tribal women of Jharkhand on the walls of their houses, depicting animals and nature, especially during festivals."
        },
        {
            "question": "What is the famous religious site located on the Parasnath Hill in Jharkhand?",
            "options": ["Vaishno Devi", "Parasnath Temple", "Mahabodhi Temple", "Somnath Temple"],
            "answer": 1,
            "description": "Parasnath Hill is one of the most important pilgrimage sites for Jains. It is believed that 20 of the 24 Jain Tirthankaras attained salvation here."
        },
        {
            "question": "Which city is known as the industrial hub of Jharkhand?",
            "options": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro"],
            "answer": 1,
            "description": "Jamshedpur, also known as Tata Nagar, is an industrial city founded by the Tata Group and is known for its steel production."
        },
        {
            "question": "Which of the following is a popular tribal festival in Jharkhand celebrated for cattle worship?",
            "options": ["Diwali", "Karma", "Sohrai", "Chhath Puja"],
            "answer": 2,
            "description": "Sohrai is a festival dedicated to cattle worship and is celebrated by various tribal communities in Jharkhand during the harvest season."
        },
        {
            "question": "Which of the following regions in Jharkhand is rich in coal reserves?",
            "options": ["Ranchi", "Dhanbad", "Jamshedpur", "Hazaribagh"],
            "answer": 1,
            "description": "Dhanbad is known as the 'Coal Capital of India' due to its extensive coal mining operations."
        },
        {
            "question": "Which festival in Jharkhand is celebrated to honor trees and nature?",
            "options": ["Sarhul", "Diwali", "Durga Puja", "Holi"],
            "answer": 0,
            "description": "Sarhul is a major festival of the tribal people in Jharkhand, celebrating the worship of trees, especially the sal tree, marking the beginning of the spring season."
        },
        {
            "question": "Which famous waterfall is located near Ranchi and is a popular tourist destination?",
            "options": ["Dudhsagar Falls", "Jog Falls", "Dassam Falls", "Athirapally Falls"],
            "answer": 2,
            "description": "Dassam Falls, located near Ranchi, is a scenic waterfall formed by the Kanchi River and is a popular tourist attraction in Jharkhand."
        },
        {
            "question": "Which Jharkhand city is known for its coal and iron industries?",
            "options": ["Hazaribagh", "Bokaro", "Chaibasa", "Dumka"],
            "answer": 1,
            "description": "Bokaro is an important industrial city known for its steel plants and coal industries, making it a key industrial hub in Jharkhand."
        },
        {
            "question": "Which festival marks the beginning of the new year for the tribal communities of Jharkhand?",
            "options": ["Baisakhi", "Makar Sankranti", "Sarhul", "Holi"],
            "answer": 2,
            "description": "Sarhul is celebrated by the tribal people of Jharkhand to mark the arrival of the new year and the beginning of the harvest season."
        },
        {
            "question": "Which famous temple in Jharkhand is dedicated to Lord Shiva and is visited by millions of pilgrims every year?",
            "options": ["Baidyanath Temple", "Amarnath Temple", "Kedarnath Temple", "Pashupatinath Temple"],
            "answer": 0,
            "description": "The Baidyanath Temple in Deoghar, Jharkhand, is one of the 12 Jyotirlingas dedicated to Lord Shiva and attracts millions of devotees, especially during the month of Shravan."
        },
        {
            "question": "Which famous tribal art form from Jharkhand involves creating elaborate tattoos?",
            "options": ["Gond Art", "Khovar Art", "Godna", "Warli Art"],
            "answer": 2,
            "description": "Godna is a traditional tattoo art practiced by the tribal communities of Jharkhand. It often involves creating intricate designs on the skin using natural dyes."
        },
        {
            "question": "Which of the following is a traditional Jharkhand folk dance?",
            "options": ["Bharatnatyam", "Karma Dance", "Garba", "Kathak"],
            "answer": 1,
            "description": "The Karma Dance is a traditional tribal dance performed during the Karma festival, symbolizing the worship of trees and nature."
        },
        {
            "question": "Which major river flows through Jharkhand, providing water for agriculture and industries?",
            "options": ["Ganga", "Yamuna", "Subarnarekha", "Krishna"],
            "answer": 2,
            "description": "The Subarnarekha River is one of the important rivers in Jharkhand, playing a crucial role in the state's agriculture and industry."
        },
        {
            "question": "Which sport is deeply rooted in Jharkhand’s tribal culture?",
            "options": ["Wrestling", "Archery", "Cricket", "Polo"],
            "answer": 1,
            "description": "Archery has a deep connection with the tribal communities of Jharkhand and has been a traditional sport practiced for centuries."
        },
        {
            "question": "Which is the capital city of Jharkhand?",
            "options": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro"],
            "answer": 0,
            "description": "Ranchi is the capital city of Jharkhand and is known for its natural beauty, waterfalls, and rich cultural heritage."
        },
        {
            "question": "Which hill station in Jharkhand is famous for its scenic views and temples?",
            "options": ["Shillong", "Netarhat", "Mount Abu", "Kodaikanal"],
            "answer": 1,
            "description": "Netarhat is a picturesque hill station in Jharkhand, known for its breathtaking views, dense forests, and pleasant weather."
        },
        {
            "question": "Which prominent Jharkhand leader played a crucial role in the formation of the state?",
            "options": ["Biju Patnaik", "Birsa Munda", "Jayaprakash Narayan", "Laloo Prasad Yadav"],
            "answer": 1,
            "description": "Birsa Munda was a tribal leader and freedom fighter who fought against British colonial rule and played a significant role in the socio-political landscape of Jharkhand."
        }
    ]
},
11:{
    "name": "Karnataka",
    "questions": [
        {
            "question": "What is the classical dance form of Karnataka?",
            "options": ["Bharatanatyam", "Kuchipudi", "Yakshagana", "Kathakali"],
            "answer": 2,
            "description": "Yakshagana is a traditional theater form combining dance, music, dialogue, and costumes, originating from coastal Karnataka."
        },
        {
            "question": "Which language is primarily spoken in Karnataka?",
            "options": ["Telugu", "Kannada", "Tamil", "Malayalam"],
            "answer": 1,
            "description": "Kannada is the official and most widely spoken language of Karnataka, with a rich literary history."
        },
        {
            "question": "Which UNESCO World Heritage Site is located in Karnataka?",
            "options": ["Hampi", "Ajanta Caves", "Konark Temple", "Elephanta Caves"],
            "answer": 0,
            "description": "Hampi, the ancient capital of the Vijayanagara Empire, is recognized for its stunning architecture and historic significance."
        },
        {
            "question": "What is the traditional attire of men in Karnataka?",
            "options": ["Mundu", "Dhoti", "Lungi", "Panche"],
            "answer": 3,
            "description": "Panche is the traditional garment worn by men in Karnataka, often accompanied by a shirt and turban."
        },
        {
            "question": "Which festival is famously celebrated in Mysore, Karnataka?",
            "options": ["Onam", "Durga Puja", "Dussehra", "Pongal"],
            "answer": 2,
            "description": "Mysore Dussehra is a grand celebration in Karnataka, showcasing a royal procession, cultural programs, and exhibitions."
        },
        {
            "question": "Which river is considered sacred in Karnataka?",
            "options": ["Ganga", "Cauvery", "Yamuna", "Krishna"],
            "answer": 1,
            "description": "The Cauvery River is revered in Karnataka and plays a crucial role in the state's agriculture and culture."
        },
        {
            "question": "What is the architectural style of the temples in Karnataka?",
            "options": ["Dravidian", "Indo-Islamic", "Nagara", "Baroque"],
            "answer": 0,
            "description": "The Dravidian style, characterized by intricate carvings and towering gopurams, is commonly seen in Karnataka's temples."
        },
        {
            "question": "Which is a popular folk art of Karnataka?",
            "options": ["Kathakali", "Kolattam", "Dollu Kunitha", "Bihu"],
            "answer": 2,
            "description": "Dollu Kunitha is a popular drum dance performed during religious and social events in Karnataka."
        },
        {
            "question": "Which dynasty built the famous temples in Belur and Halebidu?",
            "options": ["Chola", "Hoysala", "Pallava", "Vijayanagara"],
            "answer": 1,
            "description": "The Hoysala dynasty is known for constructing the intricately designed temples in Belur and Halebidu."
        },
        {
            "question": "Who is the prominent Kannada poet known as 'Rashtrakavi'?",
            "options": ["Kuvempu", "Basavanna", "Purandara Dasa", "Pampa"],
            "answer": 0,
            "description": "Kuvempu was awarded the title of 'Rashtrakavi' for his literary contributions to Kannada literature."
        },
        {
            "question": "What is the main crop grown in Karnataka?",
            "options": ["Wheat", "Sugarcane", "Coffee", "Rice"],
            "answer": 2,
            "description": "Karnataka is the largest producer of coffee in India, particularly from the regions of Coorg and Chikmagalur."
        },
        {
            "question": "What is Karnataka’s state animal?",
            "options": ["Lion", "Elephant", "Tiger", "Indian Roller"],
            "answer": 1,
            "description": "The Asian elephant is the state animal of Karnataka, symbolizing its rich wildlife heritage."
        },
        {
            "question": "Who was the founder of the Vijayanagara Empire?",
            "options": ["Harihara I", "Krishnadevaraya", "Akbar", "Tipu Sultan"],
            "answer": 0,
            "description": "Harihara I, along with his brother Bukka, founded the Vijayanagara Empire in 1336."
        },
        {
            "question": "Which district in Karnataka is known as the ‘Silicon Valley of India’?",
            "options": ["Mysore", "Bangalore", "Mangalore", "Hubli"],
            "answer": 1,
            "description": "Bangalore, the capital of Karnataka, is known for its booming IT industry, earning the nickname 'Silicon Valley of India.'"
        },
        {
            "question": "Which traditional sweet dish is famous in Karnataka?",
            "options": ["Rasgulla", "Mysore Pak", "Ladoo", "Peda"],
            "answer": 1,
            "description": "Mysore Pak, made from gram flour, sugar, and ghee, is a popular sweet dish from Karnataka."
        },
        {
            "question": "What is the state bird of Karnataka?",
            "options": ["Indian Roller", "Peacock", "Kingfisher", "Parrot"],
            "answer": 0,
            "description": "The Indian Roller, known for its vibrant colors, is the state bird of Karnataka."
        },
        {
            "question": "Which is the oldest Kannada epic?",
            "options": ["Mahabharata", "Pampa Bharata", "Ramayana", "Vikramarjuna Vijaya"],
            "answer": 1,
            "description": "Pampa Bharata, written by Adikavi Pampa, is considered one of the earliest epics in Kannada literature."
        },
        {
            "question": "Which traditional form of puppetry is popular in Karnataka?",
            "options": ["Kathputli", "Tholu Bommalata", "Gombeyatta", "Kalasutri Bahulya"],
            "answer": 2,
            "description": "Gombeyatta is a traditional form of shadow puppetry performed in Karnataka."
        },
        {
            "question": "Which historic fort was built by Tipu Sultan in Karnataka?",
            "options": ["Golconda Fort", "Srirangapatna Fort", "Red Fort", "Chitradurga Fort"],
            "answer": 1,
            "description": "Tipu Sultan fortified Srirangapatna Fort, which played a key role in his resistance against British rule."
        },
        {
            "question": "What is Karnataka’s state flower?",
            "options": ["Lotus", "Sunflower", "Indian Laburnum", "Jasmine"],
            "answer": 2,
            "description": "The Indian Laburnum, known as 'Amaltas,' is the state flower of Karnataka."
        },
        {
            "question": "Who is considered the father of Karnataka’s unification?",
            "options": ["Kengal Hanumanthaiah", "S. Nijalingappa", "Sir M. Visvesvaraya", "Kuvempu"],
            "answer": 1,
            "description": "S. Nijalingappa played a pivotal role in the linguistic unification of Karnataka after India’s independence."
        },
        {
            "question": "Which hill station in Karnataka is known for its coffee plantations?",
            "options": ["Ooty", "Coorg", "Munnar", "Lonavala"],
            "answer": 1,
            "description": "Coorg (Kodagu) is a popular hill station in Karnataka, famous for its lush coffee plantations and scenic beauty."
        },
        {
            "question": "Which deity is worshipped in the famous Chamundeshwari Temple in Mysore?",
            "options": ["Durga", "Lakshmi", "Chamundi", "Saraswati"],
            "answer": 2,
            "description": "The Chamundeshwari Temple, located on Chamundi Hill in Mysore, is dedicated to Goddess Chamundi, an incarnation of Durga."
        },
        {
            "question": "Which place in Karnataka is known as the 'Manchester of South India'?",
            "options": ["Mysore", "Bangalore", "Hubli", "Davangere"],
            "answer": 2,
            "description": "Hubli is called the 'Manchester of South India' due to its thriving cotton and textile industry."
        },
        {
            "question": "Which art form is associated with storytelling in Karnataka?",
            "options": ["Bharatanatyam", "Kathak", "Harikatha", "Kathakalakshepam"],
            "answer": 2,
            "description": "Harikatha is a traditional form of storytelling in Karnataka that combines narration, music, and dance to convey moral lessons."
        }
    ]
},
12:{
    "name": "Kerala",
    "questions": [
        {
            "question": "Which of the following festivals is most prominently celebrated in Kerala?",
            "options": ["Pongal", "Onam", "Diwali", "Holi"],
            "answer": 1,
            "description": "Onam is a major festival in Kerala that marks the harvest season and celebrates the return of the mythical King Mahabali. It includes elaborate feasts, traditional dances, and vibrant floral decorations."
        },
        {
            "question": "The traditional dance form 'Kathakali' in Kerala is known for its:",
            "options": ["Religious themes and elaborate costumes", "Folk music and simple attire", "Storytelling through dance and acrobatics", "Fast-paced rhythm and modern choreography"],
            "answer": 0,
            "description": "Kathakali is a classical dance-drama known for its elaborate costumes, intricate makeup, and storytelling of Hindu epics like the Ramayana and Mahabharata."
        },
        {
            "question": "Which of the following is a traditional Kerala dish made with rice and coconut?",
            "options": ["Sambar", "Puttu", "Dosa", "Vada"],
            "answer": 1,
            "description": "Puttu is a traditional Kerala dish made from steamed rice cakes layered with grated coconut, often served with curries or bananas."
        },
        {
            "question": "The traditional Kerala martial art form 'Kalaripayattu' is primarily known for:",
            "options": ["Use of weapons and physical combat", "Music and dance performances", "Yoga and meditation techniques", "Artistic painting and sculpture"],
            "answer": 0,
            "description": "Kalaripayattu is an ancient martial art form of Kerala that includes techniques of armed and unarmed combat, and emphasizes agility, strength, and discipline."
        },
        {
            "question": "Which Kerala festival is known for its boat races, especially the Nehru Trophy Boat Race?",
            "options": ["Onam", "Vishu", "Thrissur Pooram", "Christmas"],
            "answer": 0,
            "description": "The Nehru Trophy Boat Race is a famous event held during the Onam festival in Kerala. It features long, beautifully decorated snake boats racing in the backwaters of Alappuzha."
        },
        {
            "question": "Which traditional art form of Kerala involves detailed face painting and elaborate costumes, often performed in temples?",
            "options": ["Mohiniyattam", "Kathakali", "Theyyam", "Ottamthullal"],
            "answer": 2,
            "description": "Theyyam is a ritual dance form involving elaborate costumes, face painting, and religious performances, often performed in temples to honor deities and ancestors."
        },
        {
            "question": "The famous Kerala spice known for its medicinal properties and use in cuisine is:",
            "options": ["Cardamom", "Cinnamon", "Turmeric", "Black pepper"],
            "answer": 3,
            "description": "Kerala is known as the 'Land of Spices,' and black pepper, often referred to as the 'King of Spices,' has been a major export and integral part of Kerala's cuisine and economy."
        },
        {
            "question": "Which Kerala festival is celebrated with grand processions, fireworks, and traditional music?",
            "options": ["Onam", "Vishu", "Thrissur Pooram", "Uthrattathi"],
            "answer": 2,
            "description": "Thrissur Pooram is a major temple festival celebrated in Thrissur with grand processions of caparisoned elephants, fireworks, and traditional percussion music."
        },
        {
            "question": "Which of the following is a famous traditional dance form of Kerala that is performed by women and characterized by graceful movements?",
            "options": ["Kathakali", "Mohiniyattam", "Bharatanatyam", "Kuchipudi"],
            "answer": 1,
            "description": "Mohiniyattam is a classical dance form performed by women, known for its graceful, fluid movements and expressive storytelling."
        },
        {
            "question": "The traditional Kerala boat known for its unique shape and used in races is called:",
            "options": ["Vallam", "Shikara", "Catamaran", "Coracle"],
            "answer": 0,
            "description": "Vallam is a traditional Kerala boat with a long, narrow shape, commonly used in the famous boat races and for transportation in the backwaters."
        },
        {
            "question": "Which of the following is a traditional Kerala festival celebrated as the Malayalam New Year?",
            "options": ["Onam", "Vishu", "Pongal", "Navratri"],
            "answer": 1,
            "description": "Vishu marks the beginning of the Malayalam New Year and is celebrated with the arrangement of a special ritualistic display called 'Vishukani' and fireworks."
        },
        {
            "question": "The traditional Kerala ritualistic dance form 'Padayani' is performed to honor which deity?",
            "options": ["Shiva", "Vishnu", "Durga", "Ayyappa"],
            "answer": 2,
            "description": "Padayani is a ritualistic dance form performed during festivals dedicated to the goddess Durga, characterized by elaborate masks, costumes, and energetic movements."
        },
        {
            "question": "Which Kerala region is renowned for its backwater tourism and houseboat cruises?",
            "options": ["Munnar", "Wayanad", "Alappuzha", "Kozhikode"],
            "answer": 2,
            "description": "Alappuzha, also known as Alleppey, is famous for its backwaters and houseboat cruises, offering scenic views of Kerala's natural beauty and rural life."
        },
        {
            "question": "The traditional Kerala craft of making intricate designs using coconut leaves is known as:",
            "options": ["Coir weaving", "Bamboo craft", "Leaf weaving", "Wood carving"],
            "answer": 2,
            "description": "Leaf weaving involves creating decorative and functional items from coconut leaves, showcasing the craftsmanship and creativity of traditional Kerala artisans."
        },
        {
            "question": "The Kerala dish 'Sadya' is:",
            "options": ["A type of curry", "A traditional feast with multiple dishes", "A dessert made with rice", "A spicy meat stew"],
            "answer": 1,
            "description": "Sadya is a traditional Kerala feast consisting of a variety of vegetarian dishes served on a banana leaf, commonly enjoyed during festivals and special occasions."
        },
        {
            "question": "Which of the following is a traditional Kerala medical system that uses natural herbs and treatments?",
            "options": ["Homeopathy", "Ayurveda", "Unani", "Siddha"],
            "answer": 1,
            "description": "Ayurveda is an ancient system of medicine that originated in Kerala, focusing on natural treatments, herbs, and holistic approaches to health and wellness."
        },
        {
            "question": "The 'Chendamelam' is a traditional Kerala musical performance featuring:",
            "options": ["Classical vocal music", "Percussion instruments", "String instruments", "Wind instruments"],
            "answer": 1,
            "description": "Chendamelam is a traditional Kerala percussion ensemble performed during festivals and temple events, featuring various drums and rhythmic beats."
        },
        {
            "question": "Which Kerala festival is celebrated with traditional elephant processions and temple festivities in the city of Thrissur?",
            "options": ["Onam", "Vishu", "Thrissur Pooram", "Makaravilakku"],
            "answer": 2,
            "description": "Thrissur Pooram is renowned for its grand temple processions featuring richly decorated elephants, spectacular fireworks, and traditional music."
        },
        {
            "question": "The traditional Kerala form of storytelling through dance and drama, involving vibrant costumes and makeup, is known as:",
            "options": ["Kathakali", "Koodiyattam", "Ottamthullal", "Mohiniyattam"],
            "answer": 0,
            "description": "Kathakali is a classical dance-drama that combines storytelling with elaborate costumes, intricate makeup, and expressive movements, narrating mythological stories."
        },
        {
            "question": "The Kerala festival 'Uthrattathi' is celebrated to honor which deity?",
            "options": ["Vishnu", "Shiva", "Krishna", "Durga"],
            "answer": 0,
            "description": "Uthrattathi is celebrated in honor of Lord Vishnu, with special rituals and processions, particularly in the temples of Kerala."
        },
        {
            "question": "Which of the following is a traditional Kerala art form performed as a form of comedy and satire?",
            "options": ["Ottamthullal", "Kathakali", "Mohiniyattam", "Koodiyattam"],
            "answer": 0,
            "description": "Ottamthullal is a traditional Kerala performance art known for its humorous and satirical nature, combining dance, poetry, and music."
        },
        {
            "question": "Which Kerala district is famous for its tea gardens and scenic hill stations?",
            "options": ["Idukki", "Malappuram", "Kollam", "Palakkad"],
            "answer": 0,
            "description": "Idukki is known for its lush tea gardens, picturesque hill stations, and natural beauty, making it a popular destination for tourists seeking tranquility."
        },
        {
            "question": "The 'Vallam Kali' refers to:",
            "options": ["Traditional dance", "Temple ritual", "Boat race", "Musical performance"],
            "answer": 2,
            "description": "Vallam Kali, or boat race, is a traditional event featuring long snake boats racing in the backwaters of Kerala, especially during the Onam festival."
        },
        {
            "question": "Which of the following is a traditional Kerala garment worn by men?",
            "options": ["Kurta", "Lungi", "Mundu", "Sherwani"],
            "answer": 2,
            "description": "Mundu is a traditional Kerala garment worn by men, resembling a dhoti, often paired with a shirt or kurta."
        },
        {
            "question": "The 'Chakyar Koothu' is a traditional art form that combines:",
            "options": ["Music and dance", "Storytelling and satire", "Painting and sculpture", "Drama and acrobatics"],
            "answer": 1,
            "description": "Chakyar Koothu is a traditional art form combining storytelling with satirical commentary, performed by the Chakyar community using expressive gestures and minimal props."
        },
        {
            "question": "Which of the following is a traditional Kerala ritual performed to appease the spirits of ancestors?",
            "options": ["Theyyam", "Padayani", "Ayyappan Vilakku", "Pookalam"],
            "answer": 0,
            "description": "Theyyam is a ritualistic performance to appease spirits and deities, often involving elaborate costumes and intense rituals, performed in temples and sacred groves."
        },
        {
            "question": "Which Kerala town is renowned for its historic Jewish synagogue and vibrant spice markets?",
            "options": ["Kozhikode", "Kochi", "Thiruvananthapuram", "Kannur"],
            "answer": 1,
            "description": "Kochi (Cochin) is known for its historic Jewish synagogue, Dutch Palace, and lively spice markets, reflecting its rich colonial and trading history."
        },
        {
            "question": "Which traditional Kerala art form involves a mix of dance, drama, and music, performed during temple festivals?",
            "options": ["Mohiniyattam", "Koodiyattam", "Kathakali", "Thiruvathirakali"],
            "answer": 1,
            "description": "Koodiyattam is an ancient performing art that combines dance, drama, and music, and is performed in temples with elaborate gestures and expressions."
        },
        {
            "question": "The 'Kazhcha' ritual is performed during which Kerala festival to celebrate the new harvest?",
            "options": ["Onam", "Vishu", "Thrissur Pooram", "Makaravilakku"],
            "answer": 1,
            "description": "Kazhcha is a ritual performed during Vishu, celebrating the new harvest with special offerings and displays of auspicious items like fruits and vegetables."
        },
        {
            "question": "The 'Ayyappan Vilakku' festival in Kerala is celebrated in honor of which deity?",
            "options": ["Ganesha", "Shiva", "Ayyappa", "Krishna"],
            "answer": 2,
            "description": "Ayyappan Vilakku is a festival dedicated to Lord Ayyappa, celebrated with rituals, processions, and offerings at temples dedicated to the deity."
        }
    ]
},
13:{
    "name": "Madhya Pradesh",
    "questions": [
        {
            "question": "Which festival in Madhya Pradesh is celebrated to honor the goddess of fertility and involves the preparation of 'Bhagoria' and traditional dances?",
            "options": ["Diwali", "Holi", "Bhagoria", "Ganesh Chaturthi"],
            "answer": 2,
            "description": "Bhagoria is a tribal festival celebrated in Madhya Pradesh with traditional dances, food, and community activities, honoring the goddess of fertility."
        },
        {
            "question": "Which traditional dance form from Madhya Pradesh is performed by the Gonds and is characterized by vigorous movements and traditional music?",
            "options": ["Kathak", "Bharatanatyam", "Gonds Dance", "Garba"],
            "answer": 2,
            "description": "The Gonds Dance is a traditional dance performed by the Gond tribal community in Madhya Pradesh, known for its energetic movements and vibrant music."
        },
        {
            "question": "Which famous historical site in Madhya Pradesh is known for its rock-cut temples and is a UNESCO World Heritage Site?",
            "options": ["Sanchi", "Khajuraho", "Ujjain", "Bhimbetka"],
            "answer": 3,
            "description": "The Bhimbetka rock shelters are known for their ancient cave paintings and are a UNESCO World Heritage Site, showcasing prehistoric art and human history."
        },
        {
            "question": "The traditional dance 'Raut Nacha' is performed during which festival in Madhya Pradesh?",
            "options": ["Diwali", "Holi", "Dussehra", "Ganesh Chaturthi"],
            "answer": 2,
            "description": "Raut Nacha is a traditional dance performed during the Dussehra festival in Madhya Pradesh, celebrating the victory of good over evil with vibrant performances."
        },
        {
            "question": "Which traditional Madhya Pradesh dish is a type of lentil and rice cake, often served with chutneys and pickles?",
            "options": ["Idli", "Dosa", "Poha", "Pitha"],
            "answer": 3,
            "description": "Pitha is a traditional dish from Madhya Pradesh made from lentils and rice, often served with chutneys and pickles, commonly enjoyed during festivals."
        },
        {
            "question": "The 'Chhatarpur' district in Madhya Pradesh is renowned for its:",
            "options": ["Textile industry", "Rock-cut temples", "Metal crafts", "Handicrafts"],
            "answer": 1,
            "description": "Chhatarpur is known for its exquisite rock-cut temples, including those at Khajuraho, which are famous for their intricate sculptures and carvings."
        },
        {
            "question": "Which festival in Madhya Pradesh is celebrated with colorful processions and traditional folk performances to mark the arrival of the monsoon?",
            "options": ["Holi", "Teej", "Makar Sankranti", "Nag Panchami"],
            "answer": 3,
            "description": "Nag Panchami is celebrated with processions, folk performances, and rituals to honor snakes and seek their blessings, marking the arrival of the monsoon season."
        },
        {
            "question": "The traditional dance 'Karma' is performed by which tribal community in Madhya Pradesh?",
            "options": ["Bhils", "Gonds", "Kols", "Santals"],
            "answer": 0,
            "description": "Karma dance is a traditional dance performed by the Bhil tribal community in Madhya Pradesh, associated with the Karma festival and known for its lively and rhythmic movements."
        },
        {
            "question": "Which Madhya Pradesh festival involves the preparation of 'Petha' and other sweets, and is celebrated with much enthusiasm?",
            "options": ["Diwali", "Holi", "Navratri", "Eid"],
            "answer": 0,
            "description": "Diwali is celebrated in Madhya Pradesh with the preparation of sweets like Petha, lighting lamps, and enjoying festive activities with family and friends."
        },
        {
            "question": "The 'Sanchi Stupa' in Madhya Pradesh is known for its:",
            "options": ["Rock paintings", "Ancient Buddhist architecture", "Jain temples", "Fortifications"],
            "answer": 1,
            "description": "The Sanchi Stupa is an ancient Buddhist monument known for its well-preserved architecture and intricate carvings, and is a UNESCO World Heritage Site."
        },
        {
            "question": "Which traditional Madhya Pradesh festival is celebrated by women with the preparation of traditional foods and elaborate rituals?",
            "options": ["Holi", "Teej", "Diwali", "Ganesh Chaturthi"],
            "answer": 1,
            "description": "Teej is a festival celebrated by women in Madhya Pradesh with the preparation of traditional foods, rituals, and festive activities, marking the onset of the monsoon."
        },
        {
            "question": "The traditional 'Bastar' art of Madhya Pradesh is known for its:",
            "options": ["Pottery", "Metalwork", "Wood carvings", "Textiles"],
            "answer": 2,
            "description": "Bastar art is famous for its intricate wood carvings, crafted by the tribal artisans of the Bastar region in Madhya Pradesh, showcasing traditional motifs and designs."
        },
        {
            "question": "Which traditional Madhya Pradesh dish made from wheat and jaggery is typically prepared during festivals and special occasions?",
            "options": ["Kachori", "Chikki", "Pitha", "Khichdi"],
            "answer": 1,
            "description": "Chikki is a traditional sweet made from wheat and jaggery, commonly prepared during festivals and special occasions in Madhya Pradesh."
        },
        {
            "question": "The 'Kalbelia' dance form in Madhya Pradesh is performed by which community?",
            "options": ["Bhils", "Kalbelias", "Gonds", "Kols"],
            "answer": 1,
            "description": "The Kalbelia dance form is performed by the Kalbelia community in Madhya Pradesh, known for its graceful movements and traditional music, often celebrating cultural and religious themes."
        },
        {
            "question": "Which Madhya Pradesh festival is associated with the worship of Lord Krishna and involves singing devotional songs and reenactments of Krishna's life?",
            "options": ["Holi", "Janmashtami", "Diwali", "Dussehra"],
            "answer": 1,
            "description": "Janmashtami is celebrated in Madhya Pradesh with singing devotional songs, reenactments of Lord Krishna's life, and various festivities marking his birth."
        },
        {
            "question": "The 'Chanderi' fabric from Madhya Pradesh is known for its:",
            "options": ["Ikat patterns", "Handloom weaving", "Block printing", "Silk embroidery"],
            "answer": 1,
            "description": "Chanderi fabric is renowned for its delicate handloom weaving, producing lightweight and richly textured textiles, often used for sarees and dupattas."
        },
        {
            "question": "Which traditional dance form from Madhya Pradesh is performed by men and involves rhythmic footwork and hand movements?",
            "options": ["Kathak", "Garba", "Kalbelia", "Saila"],
            "answer": 3,
            "description": "Saila is a traditional dance form from Madhya Pradesh performed by men, characterized by rhythmic footwork and hand movements, often performed during festivals and celebrations."
        },
        {
            "question": "Which festival in Madhya Pradesh involves the performance of traditional dances and rituals to celebrate the end of the harvest season?",
            "options": ["Lohri", "Baisakhi", "Pongal", "Makar Sankranti"],
            "answer": 3,
            "description": "Makar Sankranti is celebrated in Madhya Pradesh with traditional dances, rituals, and feasting to mark the end of the harvest season and the beginning of longer days."
        },
        {
            "question": "Which of the following is a traditional Haryanvi food item that is also popular in Madhya Pradesh, made from gram flour and spices?",
            "options": ["Kachori", "Pakoras", "Chikki", "Pitha"],
            "answer": 1,
            "description": "Pakoras are traditional fritters made from gram flour and spices, popular in Madhya Pradesh as a savory snack or side dish."
        },
        {
            "question": "Which traditional Madhya Pradesh festival is celebrated with the decoration of homes, preparation of sweets, and lighting of lamps?",
            "options": ["Holi", "Diwali", "Teej", "Navratri"],
            "answer": 1,
            "description": "Diwali is celebrated in Madhya Pradesh with the decoration of homes, preparation of sweets, and lighting of lamps, marking the festival of lights and the victory of good over evil."
        },
        {
            "question": "The 'Khajuraho Temples' in Madhya Pradesh are famous for their:",
            "options": ["Jain architecture", "Ancient Buddhist art", "Erotic sculptures", "Rock-cut caves"],
            "answer": 2,
            "description": "The Khajuraho Temples are renowned for their intricate and erotic sculptures, reflecting the artistic and architectural achievements of medieval India."
        },
        {
            "question": "Which traditional Madhya Pradesh craft involves the use of metal to create intricate designs and utensils?",
            "options": ["Pottery", "Metalwork", "Wood carving", "Textiles"],
            "answer": 1,
            "description": "Traditional metalwork in Madhya Pradesh involves creating intricate designs and utensils from metal, reflecting the region's craftsmanship and artistic heritage."
        },
        {
            "question": "The 'Tamarind' in Madhya Pradesh is commonly used in which type of traditional dish?",
            "options": ["Soups", "Sweets", "Curries and chutneys", "Bread"],
            "answer": 2,
            "description": "Tamarind is commonly used in traditional Madhya Pradesh dishes to add a tangy flavor to curries and chutneys."
        },
        {
            "question": "Which festival in Madhya Pradesh is celebrated with the preparation of special foods and involves the worship of the goddess Durga?",
            "options": ["Navratri", "Diwali", "Lohri", "Baisakhi"],
            "answer": 0,
            "description": "Navratri is celebrated in Madhya Pradesh with the preparation of special foods and worship of the goddess Durga, featuring various rituals and cultural activities."
        },
        {
            "question": "The traditional 'Raut Nacha' dance in Madhya Pradesh is performed to celebrate:",
            "options": ["The harvest season", "The arrival of spring", "Victory over evil", "The birth of Krishna"],
            "answer": 0,
            "description": "Raut Nacha is performed to celebrate the harvest season and is a significant cultural event in Madhya Pradesh, involving traditional dance and music."
        },
        {
            "question": "Which traditional Madhya Pradesh festival involves the worship of the sun god and is marked by kite flying and feasting?",
            "options": ["Pongal", "Lohri", "Makar Sankranti", "Teej"],
            "answer": 2,
            "description": "Makar Sankranti is celebrated with kite flying, feasting, and worship of the sun god, marking the end of winter and the beginning of the harvest season."
        },
        {
            "question": "Which traditional Madhya Pradesh craft involves creating beautiful and functional items from bamboo?",
            "options": ["Weaving", "Pottery", "Bamboo crafts", "Metalwork"],
            "answer": 2,
            "description": "Bamboo crafts are traditional in Madhya Pradesh, involving the creation of beautiful and functional items such as baskets, mats, and other products from bamboo."
        },
        {
            "question": "The traditional 'Jhabua' district in Madhya Pradesh is known for its:",
            "options": ["Ancient temples", "Tribal art and crafts", "Fortifications", "Textile industry"],
            "answer": 1,
            "description": "Jhabua is renowned for its tribal art and crafts, including vibrant paintings and handcrafted items by the local tribal communities."
        },
        {
            "question": "Which festival in Madhya Pradesh is celebrated by preparing a special dish called 'Petha' and involves community feasts?",
            "options": ["Holi", "Diwali", "Eid", "Ganesh Chaturthi"],
            "answer": 1,
            "description": "Diwali is celebrated with the preparation of special sweets like Petha, and community feasts, marking the festival of lights with joy and festivity."
        },
        {
            "question": "The 'Bundi' district in Madhya Pradesh is known for its traditional:",
            "options": ["Sculptures", "Forts and palaces", "Metal crafts", "Pottery"],
            "answer": 1,
            "description": "Bundi is famous for its historic forts and palaces, showcasing the architectural heritage and royal history of Madhya Pradesh."
        }
    ]
},
14:{
    "name": "Maharashtra",
    "questions": [
        {
            "question": "What is the official language of Maharashtra?",
            "options": ["Hindi", "Marathi", "English", "Gujarati"],
            "answer": 1,
            "description": "Marathi is the official language of Maharashtra and is spoken by the majority of the state’s population."
        },
        {
            "question": "Which dance form from Maharashtra is performed with colorful costumes and features traditional folk music?",
            "options": ["Kathak", "Lavani", "Odissi", "Bharatnatyam"],
            "answer": 1,
            "description": "Lavani is a traditional dance form from Maharashtra known for its energetic performances and vibrant costumes."
        },
        {
            "question": "Which festival is celebrated with great enthusiasm and involves the immersion of a clay idol of Lord Ganesha?",
            "options": ["Diwali", "Ganesh Chaturthi", "Makar Sankranti", "Holi"],
            "answer": 1,
            "description": "Ganesh Chaturthi is a major festival in Maharashtra where clay idols of Lord Ganesha are worshipped and then immersed in water."
        },
        {
            "question": "Which traditional Marathi dish is a popular savory snack made from rice flour and spices?",
            "options": ["Puran Poli", "Misal Pav", "Vada Pav", "Poha"],
            "answer": 2,
            "description": "Vada Pav is a popular street food in Maharashtra, consisting of a spicy potato fritter served in a bun."
        },
        {
            "question": "Which city in Maharashtra is known for its thriving film industry, often referred to as 'Bollywood'?",
            "options": ["Pune", "Nashik", "Mumbai", "Aurangabad"],
            "answer": 2,
            "description": "Mumbai is the center of the Indian film industry, known as Bollywood, and is the entertainment hub of Maharashtra."
        },
        {
            "question": "What is the name of the ancient cave temples located near Mumbai, known for their intricate sculptures?",
            "options": ["Elephanta Caves", "Ajanta Caves", "Ellora Caves", "Karla Caves"],
            "answer": 0,
            "description": "Elephanta Caves are renowned for their rock-cut sculptures and are a significant archaeological site near Mumbai."
        },
        {
            "question": "Which famous fort in Maharashtra was a stronghold of Chhatrapati Shivaji Maharaj?",
            "options": ["Raigad Fort", "Red Fort", "Fort Agra", "Chittorgarh Fort"],
            "answer": 0,
            "description": "Raigad Fort was the capital of Chhatrapati Shivaji Maharaj’s Maratha Empire and is a symbol of Maratha heritage."
        },
        {
            "question": "What traditional festival in Maharashtra involves flying kites and celebrating the harvest season?",
            "options": ["Diwali", "Lohri", "Makar Sankranti", "Ganesh Chaturthi"],
            "answer": 2,
            "description": "Makar Sankranti is celebrated with kite flying and is associated with the harvest season in Maharashtra."
        },
        {
            "question": "Which traditional Maharashtrian garment is worn by women and is often draped in a distinctive style?",
            "options": ["Sari", "Salwar Kameez", "Lehenga", "Nauvari Sari"],
            "answer": 3,
            "description": "The Nauvari Sari is a traditional Maharashtrian garment, known for its nine-yard length and unique draping style."
        },
        {
            "question": "Which river is a major water source and holds religious significance in Maharashtra?",
            "options": ["Godavari", "Yamuna", "Ganges", "Brahmaputra"],
            "answer": 0,
            "description": "The Godavari River is one of the major rivers in Maharashtra, considered sacred and crucial for agriculture."
        },
        {
            "question": "Which Marathi poet and social reformer is known for his work in the Bhakti movement?",
            "options": ["Namdeo Dhasal", "Dnyaneshwar", "Tukaram", "Eknath"],
            "answer": 2,
            "description": "Tukaram was a prominent poet-saint known for his devotional poems and contributions to the Bhakti movement in Maharashtra."
        },
        {
            "question": "Which traditional Marathi sweet dish is made from lentils and jaggery?",
            "options": ["Puran Poli", "Shrikhand", "Modak", "Basundi"],
            "answer": 2,
            "description": "Modak is a sweet dumpling made from rice flour and filled with jaggery and coconut, traditionally offered to Lord Ganesha."
        },
        {
            "question": "Which city in Maharashtra is known for its historic architecture and the Ajanta and Ellora Caves?",
            "options": ["Pune", "Aurangabad", "Nashik", "Nagpur"],
            "answer": 1,
            "description": "Aurangabad is renowned for the Ajanta and Ellora Caves, which are famous for their ancient rock-cut temples and monasteries."
        },
        {
            "question": "What is the name of the traditional Maharashtrian dance form performed during festivals and cultural events?",
            "options": ["Kathak", "Lavani", "Bharatnatyam", "Odissi"],
            "answer": 1,
            "description": "Lavani is a traditional dance form from Maharashtra, known for its lively and expressive performances."
        },
        {
            "question": "Which major festival in Maharashtra celebrates the birth of Lord Ganesh with elaborate decorations and processions?",
            "options": ["Diwali", "Ganesh Chaturthi", "Holi", "Navratri"],
            "answer": 1,
            "description": "Ganesh Chaturthi is a significant festival celebrating the birth of Lord Ganesh with processions, decorations, and immersion rituals."
        },
        {
            "question": "Which traditional folk dance from Maharashtra is performed with a group of dancers in a circle?",
            "options": ["Garba", "Koli Dance", "Kathakali", "Bhangra"],
            "answer": 1,
            "description": "Koli Dance is a traditional folk dance of Maharashtra performed by fishermen communities, often in a circular formation."
        },
        {
            "question": "Which famous temple in Maharashtra is dedicated to the goddess Mahalaxmi and is a significant pilgrimage site?",
            "options": ["Siddhivinayak Temple", "Shirdi Sai Baba Temple", "Mahalaxmi Temple", "Kalaram Temple"],
            "answer": 2,
            "description": "The Mahalaxmi Temple in Kolhapur is a major pilgrimage site dedicated to Goddess Mahalaxmi."
        },
        {
            "question": "Which traditional Maharashtrian dish is a spicy and tangy curry made from chickpeas and spices?",
            "options": ["Bhakri", "Misal Pav", "Poha", "Upma"],
            "answer": 1,
            "description": "Misal Pav is a popular Maharashtrian dish consisting of a spicy curry made from sprouted lentils served with bread rolls."
        },
        {
            "question": "Which historical figure from Maharashtra is known as the founder of the Maratha Empire?",
            "options": ["Shivaji Maharaj", "Aurangzeb", "Nizam Shah", "Chhatrapati Shahuji"],
            "answer": 0,
            "description": "Chhatrapati Shivaji Maharaj is the founder of the Maratha Empire and a revered figure in Maharashtra’s history."
        },
        {
            "question": "Which festival in Maharashtra involves dancing around a bonfire and celebrating the arrival of spring?",
            "options": ["Holi", "Diwali", "Gudi Padwa", "Lohri"],
            "answer": 2,
            "description": "Gudi Padwa is the Marathi New Year festival, celebrated with a ceremonial flag hoisting and festive foods."
        },
        {
            "question": "Which type of traditional weaving is prominent in Maharashtra, particularly in the regions around Pune?",
            "options": ["Ikat", "Paithani", "Kosa", "Bandhani"],
            "answer": 1,
            "description": "Paithani is a traditional saree weaving style from Maharashtra, known for its intricate patterns and vibrant colors."
        },
        {
            "question": "Which city in Maharashtra is renowned for its production of the famous 'Kolhapuri Chappal'?",
            "options": ["Mumbai", "Pune", "Kolhapur", "Nashik"],
            "answer": 2,
            "description": "Kolhapur is famous for its handcrafted Kolhapuri Chappals, known for their durability and traditional craftsmanship."
        }
    ]
},
15:{
    "name": "Manipur",
    "questions": [
        {
            "question": "What is the capital of Manipur?",
            "options": ["Shillong", "Imphal", "Kohima", "Aizawl"],
            "answer": 1,
            "description": "Imphal is the capital of Manipur and is known for its historical significance, especially during World War II and its rich cultural heritage."
        },
        {
            "question": "Which classical dance form originated in Manipur?",
            "options": ["Kathak", "Odissi", "Manipuri", "Bharatanatyam"],
            "answer": 2,
            "description": "Manipuri dance is one of the major classical dance forms of India, characterized by its devotional and spiritual themes."
        },
        {
            "question": "Which traditional game of Manipur is considered the precursor to modern polo?",
            "options": ["Kabbadi", "Sagol Kangjei", "Kho-Kho", "Pithu"],
            "answer": 1,
            "description": "Sagol Kangjei, played with ponies and sticks, is believed to be the origin of modern polo and is a traditional sport of Manipur."
        },
        {
            "question": "Which festival in Manipur is known for its dance performances and honors Lord Krishna?",
            "options": ["Rath Yatra", "Yaoshang", "Lai Haraoba", "Kang Chingba"],
            "answer": 3,
            "description": "Kang Chingba is a festival where a grand procession with a wooden chariot honors Lord Krishna and is celebrated with religious fervor."
        },
        {
            "question": "What is the name of the martial art form practiced in Manipur?",
            "options": ["Thang-Ta", "Kalaripayattu", "Taekwondo", "Kung Fu"],
            "answer": 0,
            "description": "Thang-Ta is a martial art that involves the use of swords and spears and represents the bravery of Manipuri warriors."
        },
        {
            "question": "Which Manipuri festival celebrates the bond between brothers and sisters?",
            "options": ["Ningol Chakouba", "Holi", "Bihu", "Diwali"],
            "answer": 0,
            "description": "Ningol Chakouba is a festival that strengthens family ties by inviting married sisters back to their parental homes for a grand feast."
        },
        {
            "question": "Which river is considered the lifeline of Manipur?",
            "options": ["Ganga", "Barak", "Narmada", "Brahmaputra"],
            "answer": 1,
            "description": "The Barak River is the main river of Manipur and plays an essential role in the state's agriculture and ecosystem."
        },
        {
            "question": "Which animal is prominently featured in the folk traditions of Manipur?",
            "options": ["Tiger", "Elephant", "Sangai", "Rhino"],
            "answer": 2,
            "description": "The Sangai, also known as the dancing deer, is an endangered species and holds cultural significance as the state animal of Manipur."
        },
        {
            "question": "Which is the largest freshwater lake in Manipur?",
            "options": ["Loktak Lake", "Chilika Lake", "Vembanad Lake", "Dal Lake"],
            "answer": 0,
            "description": "Loktak Lake is the largest freshwater lake in Manipur and is known for its floating islands, called 'phumdis.'"
        },
        {
            "question": "What is the primary language spoken in Manipur?",
            "options": ["Bengali", "Manipuri (Meitei)", "Hindi", "Assamese"],
            "answer": 1,
            "description": "Manipuri or Meitei is the official and most widely spoken language in Manipur."
        },
        {
            "question": "What is the traditional attire worn by Manipuri women?",
            "options": ["Mekhela Chador", "Phanek", "Saree", "Lehenga"],
            "answer": 1,
            "description": "Phanek is the traditional wraparound skirt worn by Manipuri women, typically paired with an Innaphi (shawl)."
        },
        {
            "question": "Which festival marks the New Year in Manipur?",
            "options": ["Yaoshang", "Diwali", "Cheiraoba", "Christmas"],
            "answer": 2,
            "description": "Cheiraoba is celebrated as the New Year in Manipur, and families perform rituals to welcome the new year with prosperity and happiness."
        },
        {
            "question": "Which traditional festival involves the reenactment of ancient Lai (deity) worship rituals?",
            "options": ["Yaoshang", "Lai Haraoba", "Durga Puja", "Onam"],
            "answer": 1,
            "description": "Lai Haraoba is a traditional festival where ancient rituals of worshipping the local deities (Lai) are reenacted through dance, music, and prayers."
        },
        {
            "question": "What is the significance of the Kangla Fort in Manipur?",
            "options": ["It is a religious site.", "It is a former royal palace.", "It is a military base.", "It is a marketplace."],
            "answer": 1,
            "description": "Kangla Fort was the ancient seat of the Manipur kingdom and holds great historical, political, and religious significance."
        },
        {
            "question": "Which handicraft is Manipur famous for?",
            "options": ["Pottery", "Bamboo crafts", "Carpentry", "Painting"],
            "answer": 1,
            "description": "Manipur is renowned for its intricate bamboo and cane crafts, which are used to make furniture, baskets, and other household items."
        },
        {
            "question": "Which deity is primarily worshipped by the people of Manipur?",
            "options": ["Shiva", "Vishnu", "Pakhangba", "Durga"],
            "answer": 2,
            "description": "Pakhangba is an ancient serpent deity worshipped in Manipur, often associated with the protection of the land and people."
        },
        {
            "question": "What is the traditional boat race festival called in Manipur?",
            "options": ["Heikru Hidongba", "Neer Mahal", "Vallam Kali", "Kuttanad"],
            "answer": 0,
            "description": "Heikru Hidongba is a traditional boat race celebrated in Manipur on the banks of the Imphal River, symbolizing unity and strength."
        },
        {
            "question": "Which traditional Manipuri food is made from fermented fish?",
            "options": ["Rasgulla", "Iromba", "Dhokla", "Biryani"],
            "answer": 1,
            "description": "Iromba is a popular dish in Manipur made from mashed vegetables, fermented fish, and spices, known for its strong aroma and flavor."
        },
        {
            "question": "In which year did Manipur become a full-fledged state of India?",
            "options": ["1947", "1950", "1972", "1985"],
            "answer": 2,
            "description": "Manipur became a full-fledged state of India in 1972, prior to which it was a Union Territory."
        },
        {
            "question": "What is the local term for the traditional courtyard-style houses in Manipur?",
            "options": ["Kacheri", "Yumjao", "Deori", "Haveli"],
            "answer": 1,
            "description": "Yumjao is the traditional name for the Manipuri courtyard-style houses, known for their simplicity and eco-friendly design."
        },
        {
            "question": "Which Manipuri festival is similar to the festival of Holi?",
            "options": ["Yaoshang", "Durga Puja", "Bihu", "Pongal"],
            "answer": 0,
            "description": "Yaoshang is a festival of colors in Manipur, similar to Holi, where people celebrate with dances, music, and traditional rituals."
        },
        {
            "question": "What is the name of the unique floating park found in Loktak Lake?",
            "options": ["Keibul Lamjao", "Sundarbans", "Bharatpur", "Kaziranga"],
            "answer": 0,
            "description": "Keibul Lamjao National Park, located in Loktak Lake, is the only floating national park in the world and is home to the endangered Sangai deer."
        },
        {
            "question": "What is the main theme of Lai Haraoba festival?",
            "options": ["Harvest celebration", "Worship of ancestors and deities", "New Year celebration", "Victory in battle"],
            "answer": 1,
            "description": "Lai Haraoba is a celebration of the worship of deities and ancestors, showcasing the rich cultural and religious heritage of Manipur."
        },
        {
            "question": "What is the predominant religion practiced in Manipur?",
            "options": ["Christianity", "Islam", "Hinduism", "Sikhism"],
            "answer": 2,
            "description": "Hinduism, particularly Vaishnavism, is widely practiced in Manipur, and it significantly influences the cultural traditions of the state."
        },
        {
            "question": "Which traditional fabric is Manipur famous for?",
            "options": ["Pashmina", "Tangkhul", "Moirang Phee", "Kantha"],
            "answer": 2,
            "description": "Moirang Phee is a traditional textile of Manipur, known for its fine weaving patterns and motifs, particularly the famous 'loincloth.'"
        }
    ]
},
16:{
    "name": "Meghalaya",
    "questions": [
        {
            "question": "Which festival is celebrated in Meghalaya to mark the end of the harvest season and features traditional dances and music?",
            "options": ["Diwali", "Christmas", "Wangala", "Holi"],
            "answer": 2,
            "description": "Wangala, also known as the 100 Drums Festival, is celebrated by the Garo tribe in Meghalaya to mark the end of the harvest season. It features traditional dances, music, and vibrant cultural displays."
        },
        {
            "question": "The traditional dance of the Khasi tribe performed during festivals and social gatherings is called:",
            "options": ["Bihu", "Nongkrem", "Naga", "Khem"],
            "answer": 1,
            "description": "Nongkrem Dance is a traditional dance of the Khasi tribe performed during the Nongkrem festival, which is celebrated to honor the goddess Ka Blei Synshar and ensure prosperity and happiness."
        },
        {
            "question": "Which of the following is a staple food in Meghalaya, often made from rice and fermented bamboo shoots?",
            "options": ["Fish curry", "Jadoh", "Momos", "Noodles"],
            "answer": 1,
            "description": "Jadoh is a traditional Khasi dish made from rice and pork, often cooked with fermented bamboo shoots and spices, and is a staple in the Khasi cuisine."
        },
        {
            "question": "Which of the following festivals in Meghalaya involves the traditional practice of sacrificing a pig and is celebrated by the Khasi community?",
            "options": ["Shad Suk Mynsiem", "Behdienkhlam", "Christmas", "Eid"],
            "answer": 0,
            "description": "Shad Suk Mynsiem is a significant festival for the Khasi community, celebrating the harvest with traditional dances, music, and rituals, including the sacrifice of a pig to honor the deity."
        },
        {
            "question": "The unique musical instrument used in traditional Khasi music, often made from bamboo, is called:",
            "options": ["Drum", "Flute", "Mandolin", "Guitar"],
            "answer": 1,
            "description": "The Khasi flute, often made from bamboo, is a traditional instrument used in Khasi music, playing a significant role in various cultural and ceremonial events."
        },
        {
            "question": "Which of the following is a traditional festival celebrated by the Garo tribe of Meghalaya that involves drumming and dancing?",
            "options": ["Durga Puja", "Christmas", "Wangala", "Bihu"],
            "answer": 2,
            "description": "Wangala, or the 100 Drums Festival, is a major festival of the Garo tribe, featuring lively drumming, dancing, and rituals to celebrate the harvest and honor their deities."
        },
        {
            "question": "The traditional matrilineal system followed by the Khasi and Jaintia tribes means that:",
            "options": ["Property and lineage are passed through the male line", "Property and lineage are passed through the female line", "Both parents have equal rights", "Only the eldest son inherits the property"],
            "answer": 1,
            "description": "In the Khasi and Jaintia tribes, property and lineage are inherited through the mother, with the youngest daughter traditionally inheriting the family property."
        },
        {
            "question": "Which of the following is a significant traditional food made from fermented soybeans, consumed in Meghalaya?",
            "options": ["Tungrymbai", "Jadoh", "Bamboo Shoot Pickle", "Rice Cake"],
            "answer": 0,
            "description": "Tungrymbai is a traditional dish made from fermented soybeans, often used as a side dish or condiment in Meghalaya’s cuisine."
        },
        {
            "question": "The 'Lai Haraoba' festival is celebrated by which tribe in Meghalaya to honor their deities?",
            "options": ["Khasi", "Jaintia", "Garo", "Mizo"],
            "answer": 1,
            "description": "Lai Haraoba is a traditional festival of the Jaintia tribe, celebrated to honor their deities and ancestors with dances, songs, and rituals."
        },
        {
            "question": "Which traditional dance of the Garo tribe is performed during the Wangala festival and involves a large group of dancers?",
            "options": ["Bihu", "Jhumur", "Cheraw", "Thang-Ta"],
            "answer": 1,
            "description": "Jhumur dance is a traditional dance performed by the Garo tribe during the Wangala festival, characterized by its rhythmic movements and collective participation."
        },
        {
            "question": "Which of the following is a popular Khasi traditional dish made with rice, meat, and vegetables?",
            "options": ["Thukpa", "Jadoh", "Momos", "Khaw Suey"],
            "answer": 1,
            "description": "Jadoh is a traditional Khasi dish made from rice and pork, often cooked with spices and vegetables, and is a staple in Khasi cuisine."
        },
        {
            "question": "The traditional attire of Khasi women, often worn during festivals and special occasions, is known as:",
            "options": ["Salwar Kameez", "Sari", "Jainsem", "Lehenga"],
            "answer": 2,
            "description": "Jainsem is the traditional attire of Khasi women, consisting of a wrap-around cloth and a shawl, often worn during cultural events and ceremonies."
        },
        {
            "question": "Which of the following festivals is celebrated by the Mizo community of Meghalaya and involves singing, dancing, and feasting?",
            "options": ["Losar", "Chapchar Kut", "Durga Puja", "Vaisakhi"],
            "answer": 1,
            "description": "Chapchar Kut is a festival celebrated by the Mizo community, marking the end of winter and the beginning of spring, featuring traditional singing, dancing, and feasting."
        },
        {
            "question": "Which traditional dance form of the Garo tribe is performed during the Wangala festival to honor their deities?",
            "options": ["Jhumur", "Bihu", "Cheraw", "Dandiya"],
            "answer": 0,
            "description": "Jhumur is a traditional dance performed by the Garo tribe during the Wangala festival, showcasing their cultural heritage through energetic and rhythmic movements."
        },
        {
            "question": "The traditional Khasi festival 'Nongkrem' is celebrated to honor which deity?",
            "options": ["Durga", "Ka Blei Synshar", "Shiva", "Krishna"],
            "answer": 1,
            "description": "Nongkrem is celebrated to honor Ka Blei Synshar, the deity of prosperity, with traditional dances, music, and rituals performed by the Khasi community."
        },
        {
            "question": "Which of the following traditional Khasi musical instruments is a bamboo tube used to produce rhythmic sounds?",
            "options": ["Drum", "Flute", "Tnga", "Mandolin"],
            "answer": 2,
            "description": "Tnga is a traditional Khasi musical instrument made from bamboo, used to produce rhythmic sounds and enhance traditional music performances."
        },
        {
            "question": "The 'Rongali Bihu' is a festival celebrated in which Indian state, known for its vibrant cultural activities?",
            "options": ["Assam", "Meghalaya", "Nagaland", "Manipur"],
            "answer": 0,
            "description": "Rongali Bihu, also known as Bohag Bihu, is celebrated in Assam to mark the Assamese New Year and the harvest season with lively dances, music, and feasts."
        },
        {
            "question": "Which traditional festival of the Mizo people involves the decoration of houses with traditional crafts and the preparation of special foods?",
            "options": ["Chapchar Kut", "Losar", "Christmas", "Diwali"],
            "answer": 0,
            "description": "Chapchar Kut is a Mizo festival celebrating the end of winter, with traditional house decorations, craft displays, and preparation of special foods."
        },
        {
            "question": "Which of the following is a traditional food item in Meghalaya, made from fermented bamboo shoots and used as a side dish?",
            "options": ["Tungrymbai", "Bamboo Shoot Pickle", "Jadoh", "Momo"],
            "answer": 1,
            "description": "Bamboo Shoot Pickle is a traditional food item in Meghalaya made from fermented bamboo shoots, often used as a side dish or condiment."
        },
        {
            "question": "Which traditional dance of the Mizo people involves the use of bamboo poles and is performed during festivals?",
            "options": ["Bihu", "Cheraw", "Jhumur", "Wangala"],
            "answer": 1,
            "description": "Cheraw, or Bamboo Dance, is a traditional Mizo dance performed with bamboo poles, where dancers step in and out of the rhythmically moving poles."
        },
        {
            "question": "The matrilineal society in Meghalaya means that lineage and inheritance are passed through:",
            "options": ["The father", "The mother", "Both parents equally", "The eldest son"],
            "answer": 1,
            "description": "In Meghalaya’s matrilineal societies, such as the Khasi and Jaintia tribes, lineage and inheritance are passed through the mother, with property and familial responsibilities managed by women."
        },
        {
            "question": "Which of the following is a traditional festival celebrated by the Garo tribe to mark the completion of the harvest?",
            "options": ["Behdienkhlam", "Wangala", "Chapchar Kut", "Christmas"],
            "answer": 1,
            "description": "Wangala is a traditional festival of the Garo tribe celebrating the completion of the harvest with music, dancing, and rituals to honor their gods."
        },
        {
            "question": "The traditional attire worn by Mizo women, which consists of a wrap-around skirt and blouse, is known as:",
            "options": ["Jainsem", "Puan", "Sari", "Kurti"],
            "answer": 1,
            "description": "Puan is the traditional attire worn by Mizo women, consisting of a wrap-around skirt and a blouse, often with intricate designs and patterns."
        },
        {
            "question": "Which festival in Meghalaya is celebrated with traditional dances, songs, and the presentation of folk art to ensure good harvests and prosperity?",
            "options": ["Shad Suk Mynsiem", "Wangala", "Chapchar Kut", "Losar"],
            "answer": 0,
            "description": "Shad Suk Mynsiem is celebrated with traditional dances, songs, and folk art to ensure a good harvest and prosperity, honoring the goddess Ka Blei Synshar."
        },
        {
            "question": "Which traditional Khasi dish is made from fermented fish and is a popular accompaniment to meals?",
            "options": ["Tungrymbai", "Bamboo Shoot Pickle", "Khiew Miri", "Jadoh"],
            "answer": 2,
            "description": "Khiew Miri is a traditional Khasi dish made from fermented fish, often used as a flavorful accompaniment to rice and other dishes."
        },
        {
            "question": "The 'Behdienkhlam' festival is celebrated by which tribe in Meghalaya, known for its unique rituals and community participation?",
            "options": ["Garo", "Khasi", "Mizo", "Jaintia"],
            "answer": 3,
            "description": "Behdienkhlam is a festival celebrated by the Jaintia tribe, featuring unique rituals, community activities, and traditional dances to seek blessings for a good harvest."
        },
        {
            "question": "Which of the following traditional Mizo foods is made from sticky rice and is often steamed in bamboo tubes?",
            "options": ["Mizo Puan", "Bamboo Rice", "Tungrymbai", "Jadoh"],
            "answer": 1,
            "description": "Bamboo Rice is a traditional Mizo food made from sticky rice steamed in bamboo tubes, often enjoyed during festivals and special occasions."
        },
        {
            "question": "The traditional Khasi festival 'Sowai' is celebrated to:",
            "options": ["Mark the New Year", "Honor ancestors", "Celebrate the harvest", "Welcome guests"],
            "answer": 1,
            "description": "Sowai is a traditional Khasi festival celebrated to honor ancestors with rituals, feasting, and cultural performances, reflecting the Khasi community's respect for their heritage."
        },
        {
            "question": "Which of the following is a traditional form of storytelling in Meghalaya, often involving elaborate performances and dramatizations?",
            "options": ["Nohkalikai", "Bua", "Puwang", "Mizo Drama"],
            "answer": 1,
            "description": "Bua is a traditional form of storytelling in Meghalaya, often performed with dramatizations and elaborate performances that convey cultural narratives and myths."
        },
        {
            "question": "Which traditional Khasi dish is a type of steamed rice cake often eaten with meat or vegetable dishes?",
            "options": ["Jadoh", "Tungrymbai", "Khar", "Kheer"],
            "answer": 2,
            "description": "Khar is a traditional Khasi rice cake that is steamed and often served with meat or vegetable dishes, providing a staple accompaniment in Khasi meals."
        }
    ]
},
17:{
    "name": "Mizoram",
    "questions": [
        {
            "question": "Which festival in Mizoram is celebrated with traditional dances, songs, and feasting to mark the end of the harvest season?",
            "options": ["Diwali", "Christmas", "Chapchar Kut", "Holi"],
            "answer": 2,
            "description": "Chapchar Kut is a major festival in Mizoram celebrating the end of the harvest season with traditional dances, songs, and feasting."
        },
        {
            "question": "Which traditional dance from Mizoram involves colorful costumes and is performed during various festivals?",
            "options": ["Bihu", "Bamboo Dance", "Garba", "Kathak"],
            "answer": 1,
            "description": "The Bamboo Dance, or 'Cheraw', is a traditional dance in Mizoram involving rhythmic movements and the use of bamboo poles, performed during festivals and celebrations."
        },
        {
            "question": "Which festival in Mizoram is celebrated with the lighting of lamps and is dedicated to the worship of the goddess of harvest?",
            "options": ["Mizo Christmas", "Pujas", "Thangchhuah", "Lai Haraoba"],
            "answer": 3,
            "description": "Lai Haraoba is a traditional festival in Mizoram celebrating the goddess of harvest with the lighting of lamps, dances, and rituals."
        },
        {
            "question": "Which traditional dish from Mizoram is made from fermented bamboo shoots and is commonly eaten with rice?",
            "options": ["Bamboo Shoot Curry", "Pakhala", "Khar", "Momo"],
            "answer": 0,
            "description": "Bamboo Shoot Curry is a traditional dish from Mizoram made from fermented bamboo shoots and is commonly enjoyed with rice."
        },
        {
            "question": "The 'Mizo' people are indigenous to which region of India?",
            "options": ["Assam", "Mizoram", "Meghalaya", "Nagaland"],
            "answer": 1,
            "description": "The Mizo people are indigenous to Mizoram, a state in northeastern India known for its unique cultural heritage and traditions."
        },
        {
            "question": "Which traditional Mizoram festival involves the offering of food to deities and the performance of traditional dances?",
            "options": ["Christmas", "Chapchar Kut", "Diwali", "Holi"],
            "answer": 1,
            "description": "Chapchar Kut is celebrated with offerings of food to deities and traditional dances, marking the end of the harvest season in Mizoram."
        },
        {
            "question": "The traditional 'Mizo Puan' is a type of:",
            "options": ["Food", "Dance", "Clothing", "Musical instrument"],
            "answer": 2,
            "description": "Mizo Puan refers to traditional clothing worn by the Mizo people, often handwoven and featuring vibrant patterns."
        },
        {
            "question": "Which traditional Mizoram festival is known for its focus on community and social bonding, involving various traditional activities?",
            "options": ["Christmas", "Thangchhuah", "Chapchar Kut", "Diwali"],
            "answer": 1,
            "description": "Thangchhuah is a festival celebrated in Mizoram focusing on community and social bonding, involving traditional activities and feasting."
        },
        {
            "question": "Which of the following is a traditional Mizoram dance performed with bamboo poles and intricate footwork?",
            "options": ["Garba", "Bihu", "Cheraw", "Kathak"],
            "answer": 2,
            "description": "Cheraw, or Bamboo Dance, is a traditional dance from Mizoram involving rhythmic footwork and the use of bamboo poles."
        },
        {
            "question": "The 'Lunglei' district in Mizoram is known for its:",
            "options": ["Historical temples", "Natural beauty and wildlife", "Textile industry", "Metal crafts"],
            "answer": 1,
            "description": "Lunglei district in Mizoram is renowned for its natural beauty, including picturesque landscapes and rich wildlife."
        },
        {
            "question": "Which traditional Mizoram dish made from rice, meat, and vegetables is a staple in local cuisine?",
            "options": ["Momo", "Bamboo Shoot Curry", "Bamboo Rice", "Khar"],
            "answer": 2,
            "description": "Bamboo Rice is a traditional dish in Mizoram made from rice cooked inside bamboo tubes with meat and vegetables, offering a unique flavor."
        },
        {
            "question": "Which Mizoram festival is known for its traditional songs, dances, and the offering of special foods to the gods?",
            "options": ["Christmas", "Chapchar Kut", "Makar Sankranti", "Diwali"],
            "answer": 1,
            "description": "Chapchar Kut is celebrated with traditional songs, dances, and offerings of special foods to the gods, marking the end of the harvest season."
        },
        {
            "question": "The traditional 'Mizo Harvest Festival' is another name for which festival?",
            "options": ["Thangchhuah", "Chapchar Kut", "Lai Haraoba", "Christmas"],
            "answer": 1,
            "description": "Chapchar Kut is often referred to as the Mizo Harvest Festival, celebrating the end of the harvest season with various traditional activities."
        },
        {
            "question": "Which Mizoram festival involves traditional dances and ceremonies to celebrate the harvest and the new year?",
            "options": ["Lai Haraoba", "Chapchar Kut", "Christmas", "Makar Sankranti"],
            "answer": 1,
            "description": "Chapchar Kut is celebrated with traditional dances and ceremonies, marking the harvest and the arrival of the new year in Mizoram."
        },
        {
            "question": "The 'Vantawng Falls' in Mizoram is known for its:",
            "options": ["Historical significance", "Scenic beauty", "Cultural heritage", "Religious importance"],
            "answer": 1,
            "description": "Vantawng Falls is a popular natural attraction in Mizoram known for its scenic beauty and picturesque setting."
        },
        {
            "question": "Which traditional Mizoram food item is made from sticky rice and is often served during festivals?",
            "options": ["Momo", "Bamboo Shoot Curry", "Pitha", "Khar"],
            "answer": 2,
            "description": "Pitha is a traditional food item made from sticky rice and is commonly served during festivals and special occasions in Mizoram."
        },
        {
            "question": "Which Mizoram festival is celebrated with traditional feasting, songs, and dances to honor the ancestors?",
            "options": ["Chapchar Kut", "Lai Haraoba", "Christmas", "Holi"],
            "answer": 1,
            "description": "Lai Haraoba is a festival in Mizoram celebrated with feasting, songs, dances, and rituals to honor ancestors and deities."
        },
        {
            "question": "Which traditional Mizoram garment is worn by both men and women and features colorful patterns?",
            "options": ["Puan", "Sari", "Dhoti", "Kurta"],
            "answer": 0,
            "description": "The Puan is a traditional garment worn by both men and women in Mizoram, featuring colorful patterns and woven fabrics."
        },
        {
            "question": "Which Mizoram festival involves the preparation of traditional foods, including rice cakes and pork, and is celebrated with family gatherings?",
            "options": ["Christmas", "Chapchar Kut", "Makar Sankranti", "Lai Haraoba"],
            "answer": 1,
            "description": "Chapchar Kut involves the preparation of traditional foods such as rice cakes and pork, and is celebrated with family gatherings and communal feasting."
        },
        {
            "question": "Which traditional Mizoram dance involves the use of colorful bamboo poles and is performed during festivals?",
            "options": ["Cheraw", "Garba", "Kathakali", "Bihu"],
            "answer": 0,
            "description": "Cheraw, or Bamboo Dance, is performed using colorful bamboo poles and is a key feature of festivals and cultural events in Mizoram."
        },
        {
            "question": "The 'Mizo' language is primarily spoken in which Indian state?",
            "options": ["Manipur", "Nagaland", "Mizoram", "Assam"],
            "answer": 2,
            "description": "The Mizo language is predominantly spoken in Mizoram and is an integral part of the state's cultural heritage."
        },
        {
            "question": "Which festival in Mizoram is celebrated with the traditional practice of 'Rupang', involving the use of traditional musical instruments?",
            "options": ["Chapchar Kut", "Lai Haraoba", "Christmas", "Thangchhuah"],
            "answer": 1,
            "description": "Lai Haraoba is celebrated with traditional practices including 'Rupang', where traditional musical instruments are used in ceremonies and performances."
        },
        {
            "question": "Which Mizoram festival is associated with the end of the harvest season and involves various traditional customs?",
            "options": ["Lai Haraoba", "Chapchar Kut", "Makar Sankranti", "Holi"],
            "answer": 1,
            "description": "Chapchar Kut marks the end of the harvest season with various traditional customs, including dances, feasting, and communal activities."
        },
        {
            "question": "The 'Bamboo Dance' in Mizoram is performed during which type of event?",
            "options": ["Religious ceremonies", "Social gatherings", "Harvest festivals", "Wedding celebrations"],
            "answer": 2,
            "description": "The Bamboo Dance, or Cheraw, is commonly performed during harvest festivals and other cultural events in Mizoram."
        },
        {
            "question": "Which Mizoram festival involves a traditional game of 'Lunglum', where participants engage in competitive activities?",
            "options": ["Chapchar Kut", "Lai Haraoba", "Christmas", "Thangchhuah"],
            "answer": 1,
            "description": "Lai Haraoba features the traditional game of 'Lunglum', involving competitive activities and festive celebrations."
        },
        {
            "question": "The 'Rual' in Mizoram is a traditional:",
            "options": ["Dance", "Food", "Musical instrument", "Festival"],
            "answer": 2,
            "description": "The Rual is a traditional musical instrument used in Mizoram, often played during cultural and festive occasions."
        },
        {
            "question": "Which traditional Mizoram festival is celebrated with rituals and offerings to mark the new year?",
            "options": ["Christmas", "Chapchar Kut", "Thangchhuah", "Lai Haraoba"],
            "answer": 2,
            "description": "Thangchhuah is celebrated with rituals and offerings to mark the new year, involving traditional ceremonies and community gatherings."
        },
        {
            "question": "Which Mizoram dish made from fermented bamboo shoots and meat is a popular traditional food item?",
            "options": ["Bamboo Shoot Curry", "Khar", "Momo", "Pitha"],
            "answer": 0,
            "description": "Bamboo Shoot Curry is a popular traditional dish in Mizoram made from fermented bamboo shoots and meat, often enjoyed with rice."
        },
        {
            "question": "The traditional 'Puan' fabric in Mizoram is known for its:",
            "options": ["Bright colors and intricate designs", "Heavy texture and patterns", "Simple, plain style", "Synthetic materials"],
            "answer": 0,
            "description": "The Puan fabric in Mizoram is known for its bright colors and intricate designs, often used in traditional garments."
        },
        {
            "question": "Which Mizoram festival involves community feasts, traditional dances, and the celebration of ancestral spirits?",
            "options": ["Christmas", "Chapchar Kut", "Thangchhuah", "Lai Haraoba"],
            "answer": 3,
            "description": "Lai Haraoba involves community feasts, traditional dances, and the celebration of ancestral spirits, marking an important cultural event in Mizoram."
        }
    ]
},
18:{
    "name": "Nagaland",
    "questions": [
        {
            "question": "Which festival is known as the 'Festival of Festivals' in Nagaland?",
            "options": ["Hornbill Festival", "Moatsu Festival", "Sekrenyi Festival", "Tuluni Festival"],
            "answer": 0,
            "description": "The Hornbill Festival is held in December and showcases the rich cultural heritage of Nagaland, with performances, handicrafts, and traditional games."
        },
        {
            "question": "Which is the largest tribe in Nagaland?",
            "options": ["Angami", "Ao", "Sumi", "Konyak"],
            "answer": 3,
            "description": "The Konyak tribe, known for their warrior tradition and distinctive facial tattoos, is the largest tribe in Nagaland."
        },
        {
            "question": "Which traditional attire is associated with the Angami tribe?",
            "options": ["Alungstu", "Tsungkotepsu", "Rongsu", "Phichu"],
            "answer": 3,
            "description": "The Angami people wear the Phichu, a colorful shawl, and it symbolizes strength and status within the tribe."
        },
        {
            "question": "What is the primary religion practiced in Nagaland today?",
            "options": ["Hinduism", "Christianity", "Buddhism", "Animism"],
            "answer": 1,
            "description": "Over 90% of the population of Nagaland follows Christianity, primarily due to the influence of missionaries in the 19th century."
        },
        {
            "question": "Which Naga tribe is known for its headhunting tradition?",
            "options": ["Ao", "Konyak", "Chakhesang", "Lotha"],
            "answer": 1,
            "description": "The Konyak tribe was famous for its headhunting practices, which were a rite of passage until it was banned by the government in the 20th century."
        },
        {
            "question": "Which of these is a traditional Naga drink?",
            "options": ["Zutho", "Chang", "Toddy", "Bhang"],
            "answer": 0,
            "description": "Zutho is a popular rice beer brewed by the Angami tribe, often consumed during festivals and celebrations."
        },
        {
            "question": "Which Naga festival is celebrated by the Ao tribe to mark the sowing season?",
            "options": ["Moatsu Festival", "Hornbill Festival", "Sekrenyi Festival", "Tuluni Festival"],
            "answer": 0,
            "description": "The Moatsu Festival is a traditional Ao festival celebrated in May after the completion of sowing, marked by dancing, feasting, and community bonding."
        },
        {
            "question": "What is the traditional bamboo dance of the Zeliang tribe called?",
            "options": ["Naga Bamboo Dance", "War Dance", "Nruibu", "Cheraw"],
            "answer": 2,
            "description": "The Zeliang tribe performs the Naga Bamboo Dance, where dancers gracefully move between bamboo sticks, reflecting unity and coordination."
        },
        {
            "question": "Which of the following is a traditional Naga shawl with spiritual significance?",
            "options": ["Alungstu", "Naga Mekhela", "Tsungkotepsu", "Rongsu"],
            "answer": 2,
            "description": "Tsungkotepsu is a warrior shawl worn by the Ao tribe, symbolizing the warrior’s achievements and spiritual power."
        },
        {
            "question": "Which Nagaland tribe celebrates the Tuluni Festival?",
            "options": ["Sumi", "Ao", "Lotha", "Angami"],
            "answer": 0,
            "description": "The Tuluni Festival is celebrated by the Sumi tribe to mark the end of the sowing season and pray for a good harvest."
        },
        {
            "question": "What traditional weapon was commonly used by Naga warriors?",
            "options": ["Spear", "Bow and Arrow", "Machete", "Dao"],
            "answer": 3,
            "description": "The Dao, a short sword or machete, was a common weapon used by Naga warriors in battles and daily activities."
        },
        {
            "question": "What is the name of the wooden log drum used during Naga festivals?",
            "options": ["Tsan", "Khuang", "Mörüng", "Loghu"],
            "answer": 2,
            "description": "The Mörüng is a massive log drum carved out of a single tree, beaten to announce important events or during festivals."
        },
        {
            "question": "What is the traditional dwelling of Naga tribes called?",
            "options": ["Hut", "Morung", "Yurt", "Kraal"],
            "answer": 1,
            "description": "The Morung is a traditional communal house where young boys of the tribe are trained in warfare, culture, and tradition."
        },
        {
            "question": "The Angami people celebrate Sekrenyi Festival to mark what event?",
            "options": ["Harvesting", "Cleansing and purification", "Marriage ceremonies", "Tribal alliances"],
            "answer": 1,
            "description": "The Sekrenyi Festival is a purification festival, celebrated by the Angami tribe to cleanse the body and soul for the new year."
        },
        {
            "question": "Which Naga tribe is known for its intricate woodcarvings?",
            "options": ["Phom", "Chakhesang", "Konyak", "Lotha"],
            "answer": 0,
            "description": "The Phom tribe is renowned for its fine woodcarving skills, particularly in creating totems, traditional houses, and ceremonial items."
        },
        {
            "question": "What is a common theme in Naga folklore and songs?",
            "options": ["Love and romance", "Wars and bravery", "Nature and fertility", "Historical events"],
            "answer": 2,
            "description": "Naga folklore often revolves around nature, fertility, and the close relationship the tribes have with their natural surroundings."
        },
        {
            "question": "Which material is often used to make Naga jewelry?",
            "options": ["Silver", "Beads and bones", "Gold", "Seashells"],
            "answer": 1,
            "description": "Traditional Naga jewelry is made from beads, animal bones, and even tusks, symbolizing wealth and status."
        },
        {
            "question": "Which festival celebrates the return of warriors after battle in Nagaland?",
            "options": ["Sekrenyi", "Moatsu", "Naknyulum", "Hornbill"],
            "answer": 2,
            "description": "Naknyulum is a festival of the Chang tribe, celebrating peace and victory after battles."
        },
        {
            "question": "What is the primary crop grown by Naga tribes?",
            "options": ["Wheat", "Barley", "Rice", "Millet"],
            "answer": 2,
            "description": "Rice is the staple crop in Nagaland and plays an essential role in their agriculture and festivals."
        },
        {
            "question": "Which traditional Naga practice is closely associated with social hierarchy and honor?",
            "options": ["Feast of Merit", "Headhunting", "Marriage ceremony", "Tribal alliances"],
            "answer": 0,
            "description": "The Feast of Merit is a unique tradition where wealthy individuals offer grand feasts to their community, earning respect and honor."
        },
        {
            "question": "Which tribe celebrates the harvest festival of Tokhu Emong?",
            "options": ["Lotha", "Sumi", "Ao", "Konyak"],
            "answer": 0,
            "description": "Tokhu Emong is the post-harvest festival of the Lotha tribe, celebrated with dancing, singing, and feasting."
        },
        {
            "question": "What are the traditional houses of the Chang tribe called?",
            "options": ["Morungs", "Longphangs", "Tsungs", "Balang"],
            "answer": 1,
            "description": "The Longphang is a communal dormitory of the Chang tribe, where tribal youths are trained in the ways of the community."
        },
        {
            "question": "Which festival marks the beginning of the New Year for the Chakhesang tribe?",
            "options": ["Miu", "Sekrenyi", "Sükrünye", "Aoling"],
            "answer": 2,
            "description": "Sükrünye is the New Year festival of the Chakhesang tribe, marked by purification rituals and community feasts."
        },
        {
            "question": "Which of the following is a traditional Naga dance performed during festivals?",
            "options": ["Cheraw", "War Dance", "Bihu", "Ghoomar"],
            "answer": 1,
            "description": "The Naga War Dance, often performed during festivals like Hornbill, is a traditional display of strength and agility by Naga warriors."
        },
        {
            "question": "Which Naga festival is celebrated by the Yimchungru tribe to signify peace and prosperity?",
            "options": ["Metemneo", "Tuluni", "Naknyulum", "Hornbill"],
            "answer": 0,
            "description": "Metemneo is celebrated by the Yimchungru tribe to pray for peace and prosperity after the harvest season."
        }
    ]
},
19:{
    "name": "Odisha",
    "questions": [
        {
            "question": "Which festival in Odisha is known for its grand chariot procession and celebrates Lord Jagannath?",
            "options": ["Diwali", "Holi", "Rath Yatra", "Dussehra"],
            "answer": 2,
            "description": "The Rath Yatra, held in Puri, is a major festival in Odisha celebrating Lord Jagannath with a grand chariot procession that attracts millions of devotees."
        },
        {
            "question": "Which traditional dance form from Odisha is performed by women and involves graceful movements and expressions?",
            "options": ["Kathak", "Bharatanatyam", "Odissi", "Kuchipudi"],
            "answer": 2,
            "description": "Odissi is one of the classical dance forms of India, originating in Odisha, known for its graceful movements and expressive storytelling."
        },
        {
            "question": "Which famous temple in Odisha is renowned for its Kalinga-style architecture and is a UNESCO World Heritage Site?",
            "options": ["Lingaraj Temple", "Konark Sun Temple", "Jagannath Temple", "Brahmeswar Temple"],
            "answer": 1,
            "description": "The Konark Sun Temple, also known as the Black Pagoda, is famous for its intricate Kalinga architecture and is a UNESCO World Heritage Site."
        },
        {
            "question": "The traditional dance 'Chhau' is performed in Odisha during which type of festival?",
            "options": ["Holi", "Diwali", "Dussehra", "Makar Sankranti"],
            "answer": 2,
            "description": "Chhau dance is performed during the Dussehra festival in Odisha, characterized by its masked performances and dramatic storytelling."
        },
        {
            "question": "Which traditional Odisha dish made from fermented rice and lentils is often enjoyed as a staple food?",
            "options": ["Idli", "Dosa", "Pakhala", "Khichdi"],
            "answer": 2,
            "description": "Pakhala is a traditional dish from Odisha made from fermented rice and water, often served with fried or mashed vegetables."
        },
        {
            "question": "The 'Rath Yatra' festival in Puri involves the pulling of chariots dedicated to which deities?",
            "options": ["Shiva and Parvati", "Vishnu and Lakshmi", "Jagannath, Balabhadra, and Subhadra", "Rama and Sita"],
            "answer": 2,
            "description": "The Rath Yatra in Puri features the chariot procession of Lord Jagannath, his brother Balabhadra, and sister Subhadra."
        },
        {
            "question": "Which art form from Odisha is known for its intricate sand art, often depicting mythological themes?",
            "options": ["Sand Sculpture", "Pattachitra", "Tanjore Painting", "Warli Art"],
            "answer": 0,
            "description": "Sand Sculpture is a prominent art form in Odisha, especially seen during the Konark Festival, where intricate sand sculptures are created depicting mythological and cultural themes."
        },
        {
            "question": "The traditional 'Pattachitra' paintings from Odisha are known for their:",
            "options": ["Modern abstract designs", "Miniature landscapes", "Mythological themes and intricate details", "Abstract portraits"],
            "answer": 2,
            "description": "Pattachitra paintings are traditional scroll paintings from Odisha featuring intricate details and mythological themes, often depicting Hindu deities and epics."
        },
        {
            "question": "Which traditional festival in Odisha involves the worship of the goddess Durga and features elaborate decorations and cultural performances?",
            "options": ["Diwali", "Dussehra", "Holi", "Ganesh Chaturthi"],
            "answer": 1,
            "description": "Dussehra in Odisha involves the worship of the goddess Durga, with elaborate decorations, cultural performances, and traditional rituals."
        },
        {
            "question": "Which Odisha dance form is performed using elaborate masks and is known for its martial art elements?",
            "options": ["Odissi", "Kathakali", "Chhau", "Mohiniattam"],
            "answer": 2,
            "description": "Chhau is a traditional dance form in Odisha that incorporates martial art elements and is performed with elaborate masks, especially during festivals."
        },
        {
            "question": "The 'Rath Yatra' in Puri is celebrated annually during which month?",
            "options": ["January", "March", "July", "October"],
            "answer": 2,
            "description": "The Rath Yatra in Puri is celebrated annually in July, during the month of Ashadha according to the Hindu calendar."
        },
        {
            "question": "Which festival in Odisha is celebrated to mark the end of winter and involves the preparation of traditional sweets and flying kites?",
            "options": ["Pongal", "Makar Sankranti", "Holi", "Diwali"],
            "answer": 1,
            "description": "Makar Sankranti is celebrated in Odisha with the preparation of traditional sweets and kite flying, marking the end of winter and the arrival of longer days."
        },
        {
            "question": "The traditional art of 'Silver Filigree' involves creating intricate designs using:",
            "options": ["Gold", "Silver", "Copper", "Brass"],
            "answer": 1,
            "description": "Silver Filigree is a traditional art form in Odisha involving intricate designs made from silver wire, often used in jewelry and decorative items."
        },
        {
            "question": "Which traditional Odisha dance form is performed during religious and cultural festivals and features rhythmic footwork and expressive gestures?",
            "options": ["Kathak", "Odissi", "Garba", "Bharatnatyam"],
            "answer": 1,
            "description": "Odissi is performed during religious and cultural festivals in Odisha, characterized by its rhythmic footwork, expressive gestures, and elaborate costumes."
        },
        {
            "question": "The 'Rath Yatra' in Puri involves which type of chariot procession?",
            "options": ["Wooden chariots", "Metal chariots", "Stone chariots", "Paper chariots"],
            "answer": 0,
            "description": "The Rath Yatra in Puri involves the procession of large wooden chariots, which carry the deities Lord Jagannath, Balabhadra, and Subhadra."
        },
        {
            "question": "Which of the following is a traditional sweet from Odisha made from condensed milk and often enjoyed during festivals?",
            "options": ["Rasgulla", "Sandesh", "Chhena Poda", "Gulab Jamun"],
            "answer": 2,
            "description": "Chhena Poda is a traditional sweet from Odisha made from condensed milk and chenna (cottage cheese), often enjoyed during festivals and special occasions."
        },
        {
            "question": "Which Odisha festival is associated with the worship of Lord Shiva and involves colorful processions and cultural performances?",
            "options": ["Ganesh Chaturthi", "Mahashivaratri", "Holi", "Diwali"],
            "answer": 1,
            "description": "Mahashivaratri is celebrated in Odisha with colorful processions, cultural performances, and rituals dedicated to Lord Shiva."
        },
        {
            "question": "The 'Pakhala' dish from Odisha is traditionally served with:",
            "options": ["Pickles and fried vegetables", "Sweets and desserts", "Rice and lentil curry", "Flatbreads and yogurt"],
            "answer": 0,
            "description": "Pakhala is traditionally served with pickles, fried vegetables, and sometimes with curd or mashed vegetables."
        },
        {
            "question": "Which traditional dance from Odisha involves the use of masks and is performed to depict mythological stories?",
            "options": ["Kathakali", "Chhau", "Bharatanatyam", "Mohiniattam"],
            "answer": 1,
            "description": "Chhau dance involves the use of masks and is performed to depict mythological stories, combining elements of dance, drama, and martial arts."
        },
        {
            "question": "Which festival in Odisha celebrates the harvest of paddy and involves traditional songs and dances?",
            "options": ["Holi", "Makar Sankranti", "Raja", "Baisakhi"],
            "answer": 2,
            "description": "Raja is a festival celebrating the harvest of paddy, with traditional songs, dances, and rituals dedicated to the earth goddess."
        },
        {
            "question": "The 'Kalinga' style of architecture is most prominently seen in which temple in Odisha?",
            "options": ["Lingaraj Temple", "Jagannath Temple", "Konark Sun Temple", "Brahmeswar Temple"],
            "answer": 2,
            "description": "The Kalinga style of architecture is prominently featured in the Konark Sun Temple, known for its intricate carvings and grand design."
        },
        {
            "question": "Which traditional Odisha craft involves weaving intricate patterns on textiles and is renowned for its quality?",
            "options": ["Ikat", "Batik", "Bandhani", "Phulkari"],
            "answer": 0,
            "description": "Ikat is a traditional craft of Odisha involving weaving intricate patterns on textiles using a resist-dyeing technique, known for its quality and vibrant designs."
        },
        {
            "question": "The 'Ghumura' dance form from Odisha is traditionally performed by:",
            "options": ["Women", "Men", "Children", "Elders"],
            "answer": 1,
            "description": "Ghumura is a traditional dance performed by men in Odisha, known for its energetic movements and rhythmic beats."
        },
        {
            "question": "Which festival in Odisha involves the worship of the goddess Lakshmi and includes lighting lamps and preparing sweets?",
            "options": ["Diwali", "Holi", "Makar Sankranti", "Raja"],
            "answer": 0,
            "description": "Diwali is celebrated in Odisha with the worship of goddess Lakshmi, lighting of lamps, and preparation of sweets, marking the festival of lights."
        },
        {
            "question": "Which traditional Odisha dish made from rice flour and jaggery is often enjoyed as a sweet treat?",
            "options": ["Rasgulla", "Sandesh", "Pitha", "Gulab Jamun"],
            "answer": 2,
            "description": "Pitha is a traditional sweet dish from Odisha made from rice flour and jaggery, often enjoyed as a sweet treat during festivals."
        },
        {
            "question": "The 'Mahari' dance form in Odisha is traditionally performed by:",
            "options": ["Men", "Women", "Children", "Elders"],
            "answer": 1,
            "description": "The Mahari dance form is traditionally performed by women in Odisha, often associated with temple rituals and religious ceremonies."
        },
        {
            "question": "Which festival in Odisha involves traditional boating races and is celebrated during the monsoon season?",
            "options": ["Rath Yatra", "Raja", "Makar Sankranti", "Holi"],
            "answer": 1,
            "description": "Raja is celebrated with traditional boating races and various other festivities, marking the onset of the monsoon season and the earth goddess."
        },
        {
            "question": "The traditional art of 'Tassar Silk' weaving is associated with which region in Odisha?",
            "options": ["Cuttack", "Bhubaneswar", "Sambalpur", "Puri"],
            "answer": 2,
            "description": "Tassar Silk weaving is a traditional craft from Sambalpur in Odisha, known for its textured and patterned silk fabrics."
        },
        {
            "question": "Which of the following Odisha temples is known for its architectural grandeur and is a popular pilgrimage site?",
            "options": ["Lingaraj Temple", "Sun Temple", "Jagannath Temple", "Brahmeswar Temple"],
            "answer": 2,
            "description": "The Jagannath Temple in Puri is known for its architectural grandeur and is a major pilgrimage site for devotees of Lord Jagannath."
        },
        {
            "question": "The 'Nabakalebara' festival in Odisha involves:",
            "options": ["The chariot procession of deities", "The ritual replacement of deities' idols", "Traditional dance performances", "Harvest celebrations"],
            "answer": 1,
            "description": "Nabakalebara is a significant festival in Odisha where the idols of Lord Jagannath and other deities are ceremoniously replaced with new ones."
        }
    ]
},
20:{
    "name": "Punjab",
    "questions": [
        {
            "question": "Which festival is most prominently celebrated in Punjab, marking the harvest season and known for its vibrant dance and music?",
            "options": ["Diwali", "Lohri", "Holi", "Eid"],
            "answer": 1,
            "description": "Lohri is a major Punjabi festival celebrating the harvest season, featuring bonfires, traditional dance (Bhangra and Gidda), and singing folk songs."
        },
        {
            "question": "The traditional dance form 'Bhangra' from Punjab is typically performed during which occasion?",
            "options": ["Weddings", "Festivals", "Funerals", "Religious ceremonies"],
            "answer": 1,
            "description": "Bhangra is a lively and energetic dance performed during festivals like Lohri and Vaisakhi, celebrating the harvest and cultural traditions of Punjab."
        },
        {
            "question": "Which of the following is a traditional Punjabi dish made with lentils and rice?",
            "options": ["Chole Bhature", "Butter Chicken", "Dal Makhani", "Aloo Paratha"],
            "answer": 2,
            "description": "Dal Makhani is a staple Punjabi dish made with black lentils and kidney beans cooked in a creamy sauce, often enjoyed with rice or bread."
        },
        {
            "question": "The traditional Punjabi garment worn by men, often paired with a turban, is called:",
            "options": ["Kurta", "Sherwani", "Churidar", "Jodhpuri"],
            "answer": 0,
            "description": "The Kurta is a traditional garment worn by Punjabi men, often paired with a turban and Churidars or pants, and is a common attire for festivals and special occasions."
        },
        {
            "question": "Which important Sikh festival, celebrated in Punjab, marks the birth of Guru Nanak Dev Ji, the founder of Sikhism?",
            "options": ["Vaisakhi", "Gurpurab", "Diwali", "Holi"],
            "answer": 1,
            "description": "Gurpurab is a significant Sikh festival that celebrates the birth and other important events in the lives of Sikh Gurus, particularly Guru Nanak Dev Ji."
        },
        {
            "question": "The 'Gidda' dance form in Punjab is performed primarily by:",
            "options": ["Men", "Women", "Children", "Elders"],
            "answer": 1,
            "description": "Gidda is a traditional Punjabi dance performed by women, characterized by lively movements and rhythmic clapping, often during festivals and community celebrations."
        },
        {
            "question": "Which traditional Punjabi dish, known for its spicy and tangy flavor, features chickpeas and is commonly served with bread?",
            "options": ["Chole Bhature", "Saag Paneer", "Rajma", "Kadi Pakora"],
            "answer": 0,
            "description": "Chole Bhature is a popular Punjabi dish consisting of spicy chickpeas (Chole) served with deep-fried bread (Bhature), often enjoyed as a hearty meal."
        },
        {
            "question": "Which Sikh shrine, located in Amritsar, is one of the holiest sites in Sikhism and attracts millions of visitors annually?",
            "options": ["Harmandir Sahib (Golden Temple)", "Akal Takht", "Gurdwara Bangla Sahib", "Gurdwara Sis Ganj Sahib"],
            "answer": 0,
            "description": "The Harmandir Sahib, also known as the Golden Temple, is the most sacred shrine in Sikhism, renowned for its stunning architecture and spiritual significance."
        },
        {
            "question": "The traditional Punjabi festival 'Vaisakhi' is primarily celebrated to mark:",
            "options": ["The harvest season", "The end of winter", "The birth of Guru Nanak", "The beginning of the new year"],
            "answer": 0,
            "description": "Vaisakhi marks the harvest season and the foundation of the Khalsa by Guru Gobind Singh Ji. It is celebrated with processions, dancing, and religious ceremonies."
        },
        {
            "question": "Which traditional Punjabi musical instrument is a key component in Bhangra and Gidda performances?",
            "options": ["Tabla", "Dhol", "Sitar", "Harmonium"],
            "answer": 1,
            "description": "The Dhol is a traditional Punjabi drum used in Bhangra and Gidda performances, providing a rhythmic beat that energizes the dancers and accompanies the music."
        },
        {
            "question": "The traditional Punjabi dish 'Sarson da Saag' is made primarily from which vegetable?",
            "options": ["Spinach", "Mustard greens", "Cauliflower", "Potatoes"],
            "answer": 1,
            "description": "Sarson da Saag is a popular Punjabi dish made from mustard greens cooked with spices, often served with Makki di Roti (corn flatbread)."
        },
        {
            "question": "Which of the following is a traditional Punjabi sweet made from milk and sugar, often enjoyed during festivals?",
            "options": ["Gulab Jamun", "Rasgulla", "Jalebi", "Kheer"],
            "answer": 3,
            "description": "Kheer is a traditional Punjabi dessert made from rice, milk, and sugar, flavored with cardamom and garnished with nuts and dried fruits."
        },
        {
            "question": "The Punjabi folk art form known for its colorful embroidery and mirror work is called:",
            "options": ["Phulkari", "Warli", "Madhubani", "Kalamkari"],
            "answer": 0,
            "description": "Phulkari is a traditional Punjabi embroidery art characterized by its vibrant colors and intricate designs, often used to decorate shawls and dupattas."
        },
        {
            "question": "Which traditional Punjabi festival is celebrated with kite flying and bonfires, marking the onset of spring?",
            "options": ["Lohri", "Diwali", "Holi", "Baisakhi"],
            "answer": 0,
            "description": "Lohri is celebrated with bonfires, dancing, and kite flying, marking the end of winter and the beginning of the harvest season."
        },
        {
            "question": "The famous Punjabi dance form 'Gidda' is performed to celebrate which festival or event?",
            "options": ["Weddings", "New Year", "Harvest season", "Religious ceremonies"],
            "answer": 2,
            "description": "Gidda is performed during harvest festivals and other celebratory occasions, showcasing traditional Punjabi music and dance."
        },
        {
            "question": "Which historical figure established the Sikh religion and founded the city of Amritsar?",
            "options": ["Guru Nanak Dev Ji", "Guru Gobind Singh Ji", "Guru Amar Das Ji", "Guru Arjan Dev Ji"],
            "answer": 0,
            "description": "Guru Nanak Dev Ji, the founder of Sikhism, established the Sikh religion and founded the city of Amritsar, home to the Harmandir Sahib (Golden Temple)."
        },
        {
            "question": "The traditional Punjabi garment for women, often worn with a salwar and dupatta, is called:",
            "options": ["Sari", "Lehenga", "Kurti", "Churidar"],
            "answer": 2,
            "description": "Kurti is a traditional Punjabi garment worn by women, usually paired with salwar (trousers) and a dupatta (scarf), and is commonly worn for both casual and festive occasions."
        },
        {
            "question": "Which traditional Punjabi festival is celebrated with a special dance known as 'Bhangra' and includes processions, fairs, and community gatherings?",
            "options": ["Diwali", "Holi", "Vaisakhi", "Navratri"],
            "answer": 2,
            "description": "Vaisakhi is celebrated with lively Bhangra dances, processions, fairs, and community gatherings, marking the harvest season and the formation of the Khalsa."
        },
        {
            "question": "The Punjabi folk song genre 'Boliyan' is primarily known for:",
            "options": ["Religious hymns", "Rhythmic beats and poetic verses", "Classical music", "Modern pop"],
            "answer": 1,
            "description": "Boliyan are traditional Punjabi folk songs characterized by their rhythmic beats and poetic verses, often performed during weddings and festive events."
        },
        {
            "question": "Which traditional Punjabi festival is celebrated with the decoration of homes and the lighting of lamps?",
            "options": ["Lohri", "Diwali", "Baisakhi", "Holi"],
            "answer": 1,
            "description": "Diwali, also known as the Festival of Lights, is celebrated in Punjab with the lighting of lamps, fireworks, and the decoration of homes, symbolizing the victory of light over darkness."
        },
        {
            "question": "The 'Jutti' is a traditional Punjabi footwear made from:",
            "options": ["Leather", "Canvas", "Silk", "Cotton"],
            "answer": 0,
            "description": "Jutti is a traditional Punjabi footwear made from leather, often adorned with intricate embroidery and designs, worn by both men and women."
        },
        {
            "question": "Which historical city in Punjab is known for its role in the Indian independence movement and its association with the Jallianwala Bagh massacre?",
            "options": ["Amritsar", "Ludhiana", "Patiala", "Jalandhar"],
            "answer": 0,
            "description": "Amritsar is historically significant for the Jallianwala Bagh massacre and as the location of the Harmandir Sahib (Golden Temple), a central site in the Sikh faith."
        },
        {
            "question": "The 'Langar' system in Sikhism involves:",
            "options": ["Ritualistic dance", "Free community meals", "Sacred hymns", "Pilgrimage"],
            "answer": 1,
            "description": "Langar is the practice of providing free community meals to all, regardless of background or religion, and is a fundamental aspect of Sikhism, reflecting values of equality and service."
        },
        {
            "question": "The traditional Punjabi dance 'Bhangra' originated from which region?",
            "options": ["Western Punjab", "Eastern Punjab", "Northern Punjab", "Southern Punjab"],
            "answer": 0,
            "description": "Bhangra originated in Western Punjab and has evolved into a popular and energetic dance form performed during festivals and celebrations."
        },
        {
            "question": "Which Punjabi festival marks the end of the winter season and is celebrated with feasting and bonfires?",
            "options": ["Diwali", "Lohri", "Baisakhi", "Holi"],
            "answer": 1,
            "description": "Lohri marks the end of winter and is celebrated with bonfires, feasting, and folk dances, especially in rural areas of Punjab."
        },
        {
            "question": "The Punjabi art of weaving intricate designs on fabric is known as:",
            "options": ["Phulkari", "Kashida", "Bandhani", "Batik"],
            "answer": 0,
            "description": "Phulkari is a traditional art of embroidery from Punjab that involves creating vibrant floral designs on fabric, often used in traditional clothing and accessories."
        },
        {
            "question": "Which traditional Punjabi sweet, made from caramelized sugar and milk, is popular during festivals?",
            "options": ["Jalebi", "Gulab Jamun", "Kheer", "Barfi"],
            "answer": 3,
            "description": "Barfi is a sweet made from milk and sugar, often flavored with cardamom and garnished with nuts, enjoyed during special occasions and festivals."
        },
        {
            "question": "The Punjabi 'Sherwani' is a traditional outfit worn by:",
            "options": ["Women", "Children", "Men", "Elders"],
            "answer": 2,
            "description": "Sherwani is a traditional outfit worn by Punjabi men, typically during weddings and formal occasions, characterized by its elaborate design and embroidery."
        },
        {
            "question": "Which historical figure is known for leading the Sikh Khalsa and promoting the military and political strength of the Sikh community?",
            "options": ["Guru Nanak Dev Ji", "Guru Gobind Singh Ji", "Guru Amar Das Ji", "Maharaja Ranjit Singh"],
            "answer": 3,
            "description": "Maharaja Ranjit Singh was a prominent leader who established the Sikh Empire and played a crucial role in strengthening the Sikh community and its military and political influence."
        },
        {
            "question": "The traditional Punjabi art of making colorful and intricate patterns on fabric using wax is known as:",
            "options": ["Batik", "Tie-dye", "Embroidery", "Quilting"],
            "answer": 0,
            "description": "Batik is a method of decorating fabric using wax and dye to create intricate and colorful patterns, though it is more commonly associated with Indonesian culture, it is also practiced in Punjab."
        }
    ]
},
21:{
    "name": "Rajasthan",
    "questions": [
        {
            "question": "What is the capital city of Rajasthan?",
            "options": ["Udaipur", "Jodhpur", "Jaipur", "Bikaner"],
            "answer": 2,
            "description": "Jaipur, the 'Pink City,' is famous for its vibrant architecture and historic landmarks like the Hawa Mahal and Amber Fort, reflecting its rich Rajput heritage."
        },
        {
            "question": "Which fort in Rajasthan is known for its impressive architecture and was once the seat of the Rajput rulers?",
            "options": ["Chittorgarh Fort", "Mehrangarh Fort", "Kumbhalgarh Fort", "Jaisalmer Fort"],
            "answer": 1,
            "description": "Located in Jodhpur, Mehrangarh Fort is renowned for its grand architecture and extensive collection of royal artifacts, offering panoramic views of the city."
        },
        {
            "question": "Which traditional dance form of Rajasthan is characterized by its colorful costumes and lively performances?",
            "options": ["Kathak", "Ghoomar", "Bharatnatyam", "Odissi"],
            "answer": 1,
            "description": "Ghoomar is a traditional Rajasthani dance performed by women in vibrant attire, involving graceful twirls and lively movements, often seen during festivals."
        },
        {
            "question": "What is the name of the famous desert festival celebrated in Jaisalmer?",
            "options": ["Camel Festival", "Desert Festival", "Marwar Festival", "Pushkar Festival"],
            "answer": 1,
            "description": "The Jaisalmer Desert Festival showcases camel races, folk dances, and music, highlighting the vibrant culture of Rajasthan’s Thar Desert."
        },
        {
            "question": "Which Rajasthani city is known for its blue-painted houses and is often called the 'Blue City'?",
            "options": ["Udaipur", "Jodhpur", "Jaipur", "Bikaner"],
            "answer": 1,
            "description": "Jodhpur is famous for its blue-painted houses, which were originally used to identify Brahmin families and now give the city its distinctive look."
        },
        {
            "question": "What traditional Rajasthani dish is made from gram flour and is known for its spicy flavor?",
            "options": ["Dal Baati Churma", "Gatte ki Sabzi", "Bhutte ka Kees", "Laal Maas"],
            "answer": 1,
            "description": "This dish features gram flour dumplings cooked in a spicy yogurt-based gravy, showcasing the bold flavors of Rajasthani cuisine."
        },
        {
            "question": "Which majestic palace in Udaipur is known for its stunning views of Lake Pichola?",
            "options": ["City Palace", "Lake Palace", "Monsoon Palace", "Sajjangarh Palace"],
            "answer": 0,
            "description": "The City Palace in Udaipur offers spectacular views of Lake Pichola and is a complex of palaces with a blend of Rajasthani and Mughal architecture."
        },
        {
            "question": "Which festival is celebrated with great pomp in the city of Pushkar, known for its camel trading and cultural events?",
            "options": ["Diwali", "Holi", "Pushkar Camel Fair", "Makar Sankranti"],
            "answer": 2,
            "description": "This annual event includes camel trading, folk dances, and music, attracting tourists from all over the world to experience traditional Rajasthani culture."
        },
        {
            "question": "What is the name of the architectural style used in the construction of the step-wells in Rajasthan?",
            "options": ["Indo-Saracenic", "Rajputana", "Hawa Mahal", "Baoli"],
            "answer": 3,
            "description": "Step-wells or Baolis are intricate water storage systems designed with stepped galleries, showcasing unique architectural ingenuity to deal with Rajasthan's arid climate."
        },
        {
            "question": "Which Rajasthani festival involves the lighting of lamps and is celebrated with a grand display of illumination?",
            "options": ["Diwali", "Holi", "Teej", "Gangaur"],
            "answer": 0,
            "description": "Known as the Festival of Lights, Diwali is celebrated in Rajasthan with vibrant lamp displays and fireworks, symbolizing the victory of light over darkness."
        },
        {
            "question": "Which famous Rajput king is known for his bravery and is associated with the fort of Chittorgarh?",
            "options": ["Maharana Pratap", "Rana Sanga", "Raja Man Singh", "Jai Singh"],
            "answer": 0,
            "description": "Maharana Pratap, a legendary Rajput king, is celebrated for his valor and resistance against the Mughal Empire, particularly during the Battle of Haldighati."
        },
        {
            "question": "What is the traditional Rajasthani headwear for men called, often seen in vibrant colors and intricate designs?",
            "options": ["Turban", "Pagri", "Stetson", "Fedora"],
            "answer": 1,
            "description": "The Pagri, or turban, is a symbol of honor and pride in Rajasthan, often worn in elaborate styles and colors that denote social status and regional identity."
        },
        {
            "question": "Which Rajasthani folk hero is famous for his tales of bravery and chivalry and is celebrated in local folklore?",
            "options": ["Laxman Singh", "Puran Mal", "Kanhaiya Lal", "Devnarayan"],
            "answer": 3,
            "description": "Devnarayan is a revered folk hero in Rajasthan, known for his valor and dedication to the protection of his people, celebrated through songs and stories."
        },
        {
            "question": "Which Rajasthani dish made from lentils and wheat flour is typically served with ghee and enjoyed as a staple meal?",
            "options": ["Dal Baati Churma", "Kachori", "Pakora", "Chole Bhature"],
            "answer": 0,
            "description": "This classic Rajasthani dish consists of lentil curry (dal), round wheat rolls (baati), and a sweet crushed wheat mixture (churma), often enjoyed with a dollop of ghee."
        },
        {
            "question": "Which Rajasthani city is known for its beautiful lakes and is often called the 'City of Lakes'?",
            "options": ["Jaipur", "Udaipur", "Jaisalmer", "Alwar"],
            "answer": 1,
            "description": "Udaipur is famous for its picturesque lakes, including Lake Pichola and Fateh Sagar Lake, and is celebrated for its beautiful palaces and serene ambiance."
        },
        {
            "question": "Which unique type of architecture is prominent in the havelis of Rajasthan, characterized by intricately carved facades and courtyards?",
            "options": ["Indo-Gothic", "Rajputana", "Jain", "Mughal"],
            "answer": 2,
            "description": "Jain havelis in Rajasthan are known for their elaborate carvings and ornate decorations, reflecting the rich cultural and artistic heritage of the Jain community."
        },
        {
            "question": "Which famous Rajasthani fort is renowned for its massive walls and is known as the 'Great Wall of India'?",
            "options": ["Amber Fort", "Kumbhalgarh Fort", "Chittorgarh Fort", "Jaisalmer Fort"],
            "answer": 1,
            "description": "The fort is renowned for its extensive walls, stretching over 36 kilometers, and is a UNESCO World Heritage site known for its strategic military significance."
        },
        {
            "question": "Which Rajasthani festival celebrates the arrival of the monsoon and is marked by colorful processions and traditional rituals?",
            "options": ["Diwali", "Teej", "Holi", "Navratri"],
            "answer": 1,
            "description": "Teej is a vibrant festival celebrating the monsoon season, featuring colorful processions, dance, and rituals dedicated to the goddess Parvati and the well-being of married life."
        },
        {
            "question": "What is the name of the Rajasthani art form that involves creating intricate designs using mirrors and beads on fabric?",
            "options": ["Warli Art", "Kalamkari", "Phad Painting", "Mirror Work"],
            "answer": 3,
            "description": "This traditional Rajasthani craft involves sewing small mirrors into fabric, creating stunning visual effects and intricate patterns, often used in clothing and decor."
        },
        {
            "question": "Which Rajasthani city is famous for its intricate and colorful pottery, particularly the blue and red designs?",
            "options": ["Jaipur", "Jodhpur", "Udaipur", "Bikaner"],
            "answer": 0,
            "description": "Jaipur is renowned for its vibrant pottery, including blue and red ceramics known for their elaborate designs and craftsmanship, reflecting the city’s artistic heritage."
        },
        {
            "question": "What is the traditional Rajasthani attire for women, often adorned with colorful embroidery and mirror work?",
            "options": ["Sari", "Salwar Kameez", "Lehenga Choli", "Dupatta"],
            "answer": 2,
            "description": "The Lehenga Choli is a traditional outfit featuring a long skirt (lehenga) and a blouse (choli), often embellished with intricate embroidery and mirror work, especially worn during festivals and weddings."
        },
        {
            "question": "Which palace in Rajasthan is located on an island in Lake Pichola and is known for its romantic setting?",
            "options": ["City Palace", "Lake Palace", "Jag Mandir", "Monsoon Palace"],
            "answer": 1,
            "description": "The Lake Palace in Udaipur, set on Lake Pichola, is renowned for its stunning location and was once a royal retreat, now a luxurious hotel offering panoramic lake views."
        },
        {
            "question": "Which ancient Rajasthani temple is famous for its intricate marble carvings and is dedicated to the Jain Tirthankaras?",
            "options": ["Dilwara Temples", "Brihadeeswarar Temple", "Karni Mata Temple", "Jagat Shiromani Temple"],
            "answer": 0,
            "description": "Located in Mount Abu, the Dilwara Temples are famous for their exquisite marble carvings and architectural beauty, dedicated to Jain Tirthankaras."
        },
        {
            "question": "Which Rajasthani festival is celebrated by applying vibrant colors and is often associated with the arrival of spring?",
            "options": ["Diwali", "Holi", "Dussehra", "Makar Sankranti"],
            "answer": 1,
            "description": "Holi, the Festival of Colors, is celebrated with enthusiasm in Rajasthan, where people throw colored powders and water, marking the arrival of spring and the triumph of good over evil."
        },
        {
            "question": "What is the traditional Rajasthani practice of creating elaborate rangoli patterns using colored powders and flower petals called?",
            "options": ["Mehndi", "Pichwai", "Kolam", "Rangoli"],
            "answer": 3,
            "description": "Rangoli is an art form where colorful patterns are created on the ground using powders and flower petals, typically seen during festivals and special occasions to welcome guests and bring good luck."
        }
    ]
},
22:{
    "name": "Sikkim",
    "questions": [
        {
            "question": "What is the capital city of Sikkim?",
            "options": ["Gangtok", "Namchi", "Pelling", "Mangan"],
            "answer": 0,
            "description": "Gangtok is the vibrant capital city of Sikkim, known for its stunning views of the Himalayas and rich cultural heritage. It is also a hub for Tibetan Buddhist culture and home to the famous Rumtek Monastery."
        },
        {
            "question": "Which Sikkimese festival is celebrated with the performance of traditional dances and the display of colorful masks?",
            "options": ["Losar", "Dasain", "Maghe Sankranti", "Bhumchu"],
            "answer": 0,
            "description": "Losar is the Tibetan New Year festival, celebrated with elaborate dances, colorful masks, and offerings. It marks the beginning of the lunar new year and is a time for family gatherings and religious rituals."
        },
        {
            "question": "Which monastery in Sikkim is renowned for its large collection of Buddhist scriptures and rare manuscripts?",
            "options": ["Rumtek Monastery", "Pemayangtse Monastery", "Enchey Monastery", "Tashiding Monastery"],
            "answer": 0,
            "description": "Rumtek Monastery, located near Gangtok, is one of the largest and most important monasteries in Sikkim. It houses a vast collection of Buddhist texts and artifacts and is a major center for Tibetan Buddhism."
        },
        {
            "question": "Which mountain is the highest peak in Sikkim and offers breathtaking views of the surrounding Himalayan range?",
            "options": ["Kanchenjunga", "Mount Everest", "Mount Makalu", "Mount Lhotse"],
            "answer": 0,
            "description": "Kanchenjunga, standing at 8,586 meters, is the highest peak in Sikkim and the third highest in the world. It is a sacred mountain for the people of Sikkim and offers spectacular views of the Himalayas."
        },
        {
            "question": "What is the traditional Sikkimese dish made from fermented soybeans and often served with rice?",
            "options": ["Thukpa", "Momo", "Kinema", "Phagshapa"],
            "answer": 2,
            "description": "Kinema is a traditional Sikkimese dish made from fermented soybeans, known for its strong aroma and unique flavor. It is typically enjoyed with rice and often used in various local recipes."
        },
        {
            "question": "Which traditional dance of Sikkim is performed during the Losar festival and involves elaborate costumes and masks?",
            "options": ["Chaam", "Ghoomar", "Bardo Chham", "Raas"],
            "answer": 0,
            "description": "Chaam is a traditional masked dance performed during festivals like Losar. It involves intricate choreography and vibrant costumes, symbolizing the victory of good over evil."
        },
        {
            "question": "What is the name of the famous lake in Sikkim that is considered sacred and is located near the Indo-Tibetan border?",
            "options": ["Tsomgo Lake", "Gurudongmar Lake", "Khecheopalri Lake", "Rara Lake"],
            "answer": 1,
            "description": "Gurudongmar Lake, situated at an altitude of 5,430 meters, is one of the highest lakes in the world and is revered as sacred by both Buddhists and Sikhs."
        },
        {
            "question": "Which Sikkimese festival celebrates the harvest season with traditional music, dance, and feasts?",
            "options": ["Dasain", "Bhumchu", "Maghe Sankranti", "Losar"],
            "answer": 1,
            "description": "Bhumchu is a unique Sikkimese festival held at the Tashiding Monastery, celebrating the harvest season with rituals and the distribution of sacred water from a holy pot."
        },
        {
            "question": "Which Sikkimese dish, often served during special occasions, consists of spicy pork cooked with radishes and is a local favorite?",
            "options": ["Phagshapa", "Thukpa", "Momo", "Sel Roti"],
            "answer": 0,
            "description": "Phagshapa is a spicy Sikkimese pork dish cooked with radishes and seasoned with traditional spices. It is a popular dish enjoyed during festivals and family gatherings."
        },
        {
            "question": "What is the traditional Sikkimese practice of weaving colorful textiles and shawls known for its intricate patterns?",
            "options": ["Tapestry Weaving", "Ikat Weaving", "Kinnauri Weaving", "Brocade Weaving"],
            "answer": 1,
            "description": "Ikat weaving is a traditional Sikkimese craft involving dyeing the yarns before weaving them into intricate patterns, resulting in beautiful textiles and shawls."
        },
        {
            "question": "Which Sikkimese festival marks the end of the harvest season and includes traditional music, dance, and offerings to deities?",
            "options": ["Maghe Sankranti", "Losar", "Bhumchu", "Dashain"],
            "answer": 0,
            "description": "Maghe Sankranti is celebrated with various rituals and festivities, marking the end of the harvest season and offering thanks to deities for a bountiful harvest."
        },
        {
            "question": "Which famous Sikkimese attraction is known for its beautiful waterfalls and is located near the town of Pelling?",
            "options": ["Kanchenjunga Waterfall", "Khecheopalri Waterfall", "Rimbi Waterfall", "Banjhakri Waterfall"],
            "answer": 2,
            "description": "Rimbi Waterfall, near Pelling, is a popular tourist spot known for its picturesque views and serene environment, making it a great place for nature lovers."
        },
        {
            "question": "What is the traditional Sikkimese garment worn by women, typically made from silk and adorned with intricate embroidery?",
            "options": ["Kimono", "Chuba", "Sari", "Salwar Kameez"],
            "answer": 1,
            "description": "The Chuba is a traditional Sikkimese garment for women, resembling a long dress or robe made from silk or wool, often decorated with intricate embroidery and worn during special occasions."
        },
        {
            "question": "Which Sikkimese festival is known for its vibrant celebrations of local deities with traditional rituals and community gatherings?",
            "options": ["Losar", "Indra Jatra", "Bhumchu", "Dasain"],
            "answer": 2,
            "description": "Bhumchu is celebrated at the Tashiding Monastery with rituals involving sacred water, offering prayers for prosperity and good fortune, and features vibrant community gatherings."
        },
        {
            "question": "Which prominent monastery in Sikkim is known for its stunning architecture and serene environment, located on a hilltop overlooking Gangtok?",
            "options": ["Enchey Monastery", "Rumtek Monastery", "Pemayangtse Monastery", "Tashiding Monastery"],
            "answer": 0,
            "description": "Enchey Monastery, located on a hilltop near Gangtok, is known for its beautiful architecture and tranquil surroundings, serving as a significant center for Tibetan Buddhism."
        },
        {
            "question": "What is the primary language spoken in Sikkim, reflecting its diverse cultural heritage and ethnic groups?",
            "options": ["Nepali", "Hindi", "Tibetan", "English"],
            "answer": 0,
            "description": "Nepali is the most widely spoken language in Sikkim, reflecting the state's diverse ethnic groups and cultural heritage, alongside other languages like Tibetan and Bhutia."
        },
        {
            "question": "Which Sikkimese landmark is a popular viewpoint offering panoramic views of the Kanchenjunga range and the surrounding valleys?",
            "options": ["Tsomgo Lake", "Nathu La Pass", "Ganesh Tok", "Pelling"],
            "answer": 2,
            "description": "Ganesh Tok is a popular viewpoint near Gangtok that offers breathtaking views of the Kanchenjunga range and the surrounding valleys, making it a favorite spot for tourists."
        },
        {
            "question": "Which traditional Sikkimese dish is a type of noodle soup with vegetables and meat, widely enjoyed across the region?",
            "options": ["Momo", "Thukpa", "Kinema", "Sel Roti"],
            "answer": 1,
            "description": "Thukpa is a traditional Sikkimese noodle soup made with meat, vegetables, and spices, offering a hearty and flavorful meal that is especially popular in the cold weather."
        },
        {
            "question": "What is the significance of the Khecheopalri Lake in Sikkim, and why is it considered sacred?",
            "options": ["It is believed to fulfill wishes and is sacred to both Buddhists and Hindus.", "It is a historic site of an ancient battle.", "It is known for its unique flora and fauna.", "It is the highest lake in Sikkim."],
            "answer": 0,
            "description": "Khecheopalri Lake is considered holy by both Buddhists and Hindus, and it is believed that the lake fulfills the wishes of those who visit it."
        },
        {
            "question": "Which Sikkimese festival involves the performance of traditional masked dances and the offering of prayers for peace and prosperity?",
            "options": ["Losar", "Buddha Jayanti", "Tihar", "Dashain"],
            "answer": 0,
            "description": "Losar, the Tibetan New Year, features traditional masked dances and ceremonies to invoke blessings for peace and prosperity in the coming year."
        },
        {
            "question": "Which famous attraction in Sikkim is known for its botanical gardens and is a hub for preserving various species of plants?",
            "options": ["Himalayan Botanical Garden", "Namgyal Institute of Tibetology", "Tashi View Point", "Enchey Monastery"],
            "answer": 0,
            "description": "The Himalayan Botanical Garden in Sikkim is known for its diverse collection of plant species and serves as a center for botanical research and conservation."
        },
        {
            "question": "Which Sikkimese festival is celebrated with the preparation of traditional dishes and involves communal feasting?",
            "options": ["Losar", "Chhewar", "Maghe Sankranti", "Tihar"],
            "answer": 2,
            "description": "Maghe Sankranti is celebrated with communal feasting, preparation of traditional dishes, and various rituals to mark the end of the harvest season and the arrival of longer days."
        },
        {
            "question": "Which Sikkimese dish consists of dumplings filled with meat or vegetables and is a popular snack across the region?",
            "options": ["Momo", "Thukpa", "Kinema", "Phagshapa"],
            "answer": 0,
            "description": "Momo are steamed or fried dumplings filled with meat or vegetables, widely enjoyed as a snack or appetizer in Sikkim and the surrounding Himalayan region."
        },
        {
            "question": "Which ancient Sikkimese practice involves the use of medicinal herbs and is a traditional form of healing?",
            "options": ["Ayurveda", "Sowa Rigpa", "Homeopathy", "Acupuncture"],
            "answer": 1,
            "description": "Sowa Rigpa is an ancient Tibetan system of medicine practiced in Sikkim, using medicinal herbs and traditional techniques for healing and maintaining health."
        },
        {
            "question": "Which Sikkimese landmark is renowned for its impressive architecture and serves as a center for Tibetan Buddhist studies and culture?",
            "options": ["Namgyal Institute of Tibetology", "Rumtek Monastery", "Pemayangtse Monastery", "Tashiding Monastery"],
            "answer": 0,
            "description": "The Namgyal Institute of Tibetology in Gangtok is a major center for Tibetan Buddhist studies, preserving Tibetan culture, artifacts, and manuscripts."
        }
    ]
},
23:{
    "name": "Tamil Nadu",
    "questions": [
        {
            "question": "Which is the classical dance form of Tamil Nadu?",
            "options": ["Kathak", "Bharatanatyam", "Kuchipudi", "Mohiniyattam"],
            "answer": 1,
            "description": "Bharatanatyam is one of the oldest and most traditional dance forms, originating from Tamil Nadu, known for its grace and intricate footwork."
        },
        {
            "question": "Which festival marks the Tamil New Year?",
            "options": ["Pongal", "Diwali", "Puthandu", "Navratri"],
            "answer": 2,
            "description": "Puthandu, celebrated in April, is the traditional Tamil New Year, where homes are decorated and prayers are offered."
        },
        {
            "question": "Which is the famous harvest festival of Tamil Nadu?",
            "options": ["Pongal", "Holi", "Onam", "Makar Sankranti"],
            "answer": 0,
            "description": "Pongal is a four-day harvest festival dedicated to the Sun God, celebrated with cooking rice and sugarcane offerings."
        },
        {
            "question": "What is the traditional dress for Tamil men?",
            "options": ["Kurta", "Lungi", "Dhoti (Veshti)", "Sherwani"],
            "answer": 2,
            "description": "Veshti or dhoti is the traditional garment for men in Tamil Nadu, usually worn with an angavastram (upper cloth)."
        },
        {
            "question": "What is the ancient Tamil martial art called?",
            "options": ["Kalaripayattu", "Silambam", "Taekwondo", "Wushu"],
            "answer": 1,
            "description": "Silambam is a traditional martial art that uses bamboo sticks, and it dates back to ancient Tamil history."
        },
        {
            "question": "Which famous Tamil temple is known for its massive gopurams (tower gates)?",
            "options": ["Brihadeeswara Temple", "Meenakshi Temple", "Jagannath Temple", "Sun Temple"],
            "answer": 1,
            "description": "The Meenakshi Temple in Madurai is renowned for its intricate gopurams, representing Dravidian architecture."
        },
        {
            "question": "Which type of Tamil Nadu folk music is performed during festivals and religious ceremonies?",
            "options": ["Carnatic", "Gaana", "Koothu", "Villu Paatu"],
            "answer": 3,
            "description": "Villu Paatu is a traditional folk art that narrates stories using songs and the sound of a bow."
        },
        {
            "question": "Which classical Tamil text describes ancient Tamil traditions, lifestyle, and ethics?",
            "options": ["Mahabharata", "Thirukkural", "Ramayana", "Bhagavad Gita"],
            "answer": 1,
            "description": "Thirukkural, authored by Thiruvalluvar, is a classic Tamil text that provides ethical guidelines and wisdom."
        },
        {
            "question": "What is the main language spoken in Tamil Nadu?",
            "options": ["Telugu", "Kannada", "Tamil", "Malayalam"],
            "answer": 2,
            "description": "Tamil is the official language of Tamil Nadu and one of the oldest living languages in the world."
        },
        {
            "question": "Which city is considered the cultural capital of Tamil Nadu?",
            "options": ["Coimbatore", "Chennai", "Madurai", "Thanjavur"],
            "answer": 2,
            "description": "Madurai is often referred to as the cultural capital due to its rich history, literature, and religious significance."
        },
        {
            "question": "Which dance-drama form is popular in rural Tamil Nadu?",
            "options": ["Kathakali", "Koothu", "Kuchipudi", "Yakshagana"],
            "answer": 1,
            "description": "Koothu is a traditional Tamil folk theatre form, usually performed in open spaces, combining music, dance, and storytelling."
        },
        {
            "question": "Which Tamil festival involves decorating cows and celebrating the bond between humans and animals?",
            "options": ["Mattu Pongal", "Holi", "Deepavali", "Ugadi"],
            "answer": 0,
            "description": "Mattu Pongal is the third day of the Pongal festival, where cows are revered and celebrated for their agricultural contributions."
        },
        {
            "question": "What is the famous craft form of making bronze statues in Tamil Nadu?",
            "options": ["Tanjore Painting", "Kalamkari", "Dokra Art", "Swamimalai Bronze Casting"],
            "answer": 3,
            "description": "Swamimalai Bronze Casting is a traditional technique of creating bronze idols, particularly used for making religious figures."
        },
        {
            "question": "Which traditional Tamil cuisine dish is made of rice and lentils, fermented overnight?",
            "options": ["Dosa", "Idli", "Parotta", "Biryani"],
            "answer": 1,
            "description": "Idli is a steamed rice cake, a staple in Tamil cuisine, typically served with chutney and sambar."
        },
        {
            "question": "Which temple is known as the “Big Temple” in Tamil Nadu?",
            "options": ["Rameshwaram Temple", "Brihadeeswarar Temple", "Chidambaram Temple", "Srirangam Temple"],
            "answer": 1,
            "description": "Brihadeeswarar Temple in Thanjavur is known as the “Big Temple,” and is famous for its towering architecture and grandeur."
        },
        {
            "question": "What traditional Tamil Nadu painting style uses gold leaf and vibrant colors?",
            "options": ["Madhubani", "Tanjore Painting", "Pattachitra", "Warli"],
            "answer": 1,
            "description": "Tanjore Painting is a classical South Indian painting style known for its use of gold foil and religious themes."
        },
        {
            "question": "Which is the traditional flower used for adorning women’s hair in Tamil Nadu?",
            "options": ["Lotus", "Rose", "Jasmine", "Hibiscus"],
            "answer": 2,
            "description": "Jasmine, especially the Madurai Malli, is commonly used by Tamil women to adorn their hair."
        },
        {
            "question": "Which famous Tamil festival is celebrated to honor the Sun God?",
            "options": ["Diwali", "Pongal", "Onam", "Eid"],
            "answer": 1,
            "description": "Pongal is a harvest festival dedicated to Surya (the Sun God) and signifies the end of the winter solstice."
        },
        {
            "question": "Which form of Tamil Nadu folk art involves storytelling through music using a bow-shaped instrument?",
            "options": ["Koothu", "Bharatanatyam", "Villu Paatu", "Kathakali"],
            "answer": 2,
            "description": "Villu Paatu is a unique folk art that uses a bow as an instrument to create music while narrating stories."
        },
        {
            "question": "Which is the popular Tamil Nadu sweet dish made during Diwali?",
            "options": ["Jalebi", "Payasam", "Mysore Pak", "Ladoo"],
            "answer": 2,
            "description": "Mysore Pak is a famous Tamil Nadu sweet made from ghee, sugar, and chickpea flour, often prepared during Diwali."
        },
        {
            "question": "What is the official emblem of the Tamil Nadu state government?",
            "options": ["The tiger", "The lotus", "The gopuram", "The Ashoka Pillar"],
            "answer": 2,
            "description": "The gopuram (temple tower) is featured in the emblem of Tamil Nadu, representing its rich temple heritage."
        },
        {
            "question": "Which Tamil Nadu city is famous for silk saree production?",
            "options": ["Tiruppur", "Kanchipuram", "Coimbatore", "Salem"],
            "answer": 1,
            "description": "Kanchipuram is renowned for its handwoven silk sarees, a symbol of Tamil Nadu’s textile craftsmanship."
        },
        {
            "question": "Which Tamil festival celebrates the bond between brothers and sisters?",
            "options": ["Karthigai Deepam", "Avani Avittam", "Aadi Perukku", "Thai Poosam"],
            "answer": 0,
            "description": "Karthigai Deepam is celebrated with lighting lamps, symbolizing the bond of love and protection among siblings."
        },
        {
            "question": "What is the primary deity worshipped in the temples of Tamil Nadu?",
            "options": ["Shiva", "Vishnu", "Krishna", "Saraswati"],
            "answer": 0,
            "description": "Lord Shiva is predominantly worshipped in many temples across Tamil Nadu, especially in Chidambaram and Thanjavur."
        },
        {
            "question": "Which famous Tamil Nadu festival involves a chariot procession at Rameshwaram?",
            "options": ["Maha Shivaratri", "Navaratri", "Rath Yatra", "Panguni Uthiram"],
            "answer": 3,
            "description": "Panguni Uthiram is a festival where a chariot procession takes place, especially in the Rameshwaram Temple."
        }
    ]
},
24:{
    "name": "Telangana",
    "questions": [
        {
            "question": "Which traditional festival in Telangana is celebrated with colorful processions and dances to honor the goddess Bathukamma?",
            "options": ["Diwali", "Bathukamma", "Ugadi", "Bonalu"],
            "answer": 1,
            "description": "Bathukamma is a floral festival celebrated in Telangana, honoring the goddess Bathukamma with vibrant floral arrangements, traditional dances, and songs."
        },
        {
            "question": "The traditional dance form 'Lambadi' is primarily performed by which community in Telangana?",
            "options": ["Gonds", "Koya", "Lambadi", "Pochampally"],
            "answer": 2,
            "description": "Lambadi dance is performed by the Lambadi community in Telangana, known for its colorful costumes and lively rhythms, celebrating their cultural heritage."
        },
        {
            "question": "Which of the following is a staple food in Telangana, made from rice and often prepared with various vegetables and spices?",
            "options": ["Biryani", "Pulao", "Sakinalu", "Khichdi"],
            "answer": 2,
            "description": "Sakinalu is a traditional Telangana snack made from rice flour and spices, often shaped into circular rings and deep-fried."
        },
        {
            "question": "The 'Bonalu' festival is celebrated in Telangana to:",
            "options": ["Mark the New Year", "Honor the goddess Mahakali", "Celebrate harvest", "Commemorate historical events"],
            "answer": 1,
            "description": "Bonalu is a festival dedicated to the goddess Mahakali, celebrated with processions, offerings, and traditional dances to seek blessings for health and prosperity."
        },
        {
            "question": "Which traditional festival marks the beginning of the Telugu New Year and involves the preparation of 'Ugadi Pachadi'?",
            "options": ["Pongal", "Ugadi", "Sankranti", "Dassera"],
            "answer": 1,
            "description": "Ugadi marks the Telugu New Year and is celebrated with the preparation of Ugadi Pachadi, a special dish made from tamarind, jaggery, and various other ingredients representing different flavors."
        },
        {
            "question": "The famous 'Pochampally' sarees are known for their:",
            "options": ["Hand-embroidery", "Ikat weaving technique", "Block printing", "Appliqué work"],
            "answer": 1,
            "description": "Pochampally sarees are renowned for their traditional Ikat weaving technique, characterized by intricate patterns and vibrant colors."
        },
        {
            "question": "The 'Nirmal Art' from Telangana is known for its:",
            "options": ["Pottery", "Painting", "Weaving", "Metalwork"],
            "answer": 1,
            "description": "Nirmal Art is a traditional painting style from Telangana, known for its detailed and colorful depictions of mythological and religious themes."
        },
        {
            "question": "Which traditional dance form from Telangana is performed with bamboo sticks and involves rhythmic movements?",
            "options": ["Kuchipudi", "Lambadi", "Dandia", "Gussadi"],
            "answer": 3,
            "description": "Gussadi is a traditional dance performed by the Gonds in Telangana, often involving bamboo sticks and vibrant, rhythmic movements."
        },
        {
            "question": "The 'Sankranti' festival in Telangana is known for:",
            "options": ["Kite flying and feasting", "Decorating temples", "Processions and dances", "Lighting lamps"],
            "answer": 0,
            "description": "Sankranti, also known as Makar Sankranti, is celebrated in Telangana with kite flying, feasting, and preparing traditional sweets like 'tilgul.'"
        },
        {
            "question": "Which traditional Telangana dish is a spicy rice preparation often made with meat and is a popular festive food?",
            "options": ["Biryani", "Pulao", "Kichidi", "Jowar Roti"],
            "answer": 0,
            "description": "Telangana Biryani is a flavorful rice dish made with meat, spices, and herbs, widely enjoyed during festivals and special occasions."
        },
        {
            "question": "Which of the following is a popular traditional sweet in Telangana, made from jaggery and sesame seeds?",
            "options": ["Mysore Pak", "Laddu", "Tilgul", "Rasgulla"],
            "answer": 2,
            "description": "Tilgul is a traditional sweet made from jaggery and sesame seeds, commonly enjoyed during Sankranti and other festivals."
        },
        {
            "question": "Which traditional Telangana festival is celebrated to welcome the monsoon season with offerings to local deities?",
            "options": ["Bonalu", "Bathukamma", "Ugadi", "Ganesh Chaturthi"],
            "answer": 0,
            "description": "Bonalu is celebrated to welcome the monsoon season and is marked by offerings to the goddess Mahakali, with processions, feasting, and rituals."
        },
        {
            "question": "The 'Nirmal Craft' from Telangana is known for its intricate:",
            "options": ["Pottery designs", "Textile patterns", "Wood carvings", "Metal jewelry"],
            "answer": 2,
            "description": "Nirmal Craft includes intricate wood carvings, often depicting mythological and religious themes, and is a traditional art form from Telangana."
        },
        {
            "question": "The 'Koya' dance is associated with which tribal community in Telangana?",
            "options": ["Gonds", "Lambadis", "Koyas", "Telagas"],
            "answer": 2,
            "description": "The Koya dance is a traditional dance performed by the Koya tribal community in Telangana, known for its vibrant movements and cultural significance."
        },
        {
            "question": "Which traditional attire worn by women in Telangana is known for its rich silk fabric and intricate designs?",
            "options": ["Sari", "Lehenga", "Pochampally Saree", "Salwar Kameez"],
            "answer": 2,
            "description": "The Pochampally saree is a traditional attire from Telangana, renowned for its rich silk fabric and intricate Ikat designs."
        },
        {
            "question": "The 'Yellamma' festival in Telangana is celebrated to honor which deity?",
            "options": ["Lakshmi", "Saraswati", "Yellamma", "Kali"],
            "answer": 2,
            "description": "The Yellamma festival is dedicated to the goddess Yellamma, with rituals, processions, and offerings to seek blessings for health and prosperity."
        },
        {
            "question": "Which traditional dance form in Telangana involves elaborate costumes and is performed during religious festivals?",
            "options": ["Kuchipudi", "Gussadi", "Lambadi", "Perini"],
            "answer": 3,
            "description": "Perini is a traditional dance form performed during religious festivals in Telangana, characterized by elaborate costumes and energetic movements."
        },
        {
            "question": "Which traditional sweet, made from rice flour and jaggery, is commonly prepared during the festival of Sankranti in Telangana?",
            "options": ["Laddu", "Puran Poli", "Pongal", "Ariselu"],
            "answer": 3,
            "description": "Ariselu is a traditional sweet made from rice flour and jaggery, commonly prepared during the Sankranti festival in Telangana."
        },
        {
            "question": "The 'Mangalagiri' fabric from Telangana is known for its:",
            "options": ["Hand-woven cotton", "Ikat patterns", "Silk embroidery", "Block prints"],
            "answer": 0,
            "description": "Mangalagiri fabric is known for its high-quality hand-woven cotton, often used to make traditional garments and textiles in Telangana."
        },
        {
            "question": "Which traditional festival in Telangana marks the beginning of the harvest season and involves preparing and sharing special foods?",
            "options": ["Ugadi", "Bathukamma", "Sankranti", "Diwali"],
            "answer": 2,
            "description": "Sankranti marks the beginning of the harvest season with special foods, feasting, and celebrations, including kite flying and community gatherings."
        },
        {
            "question": "Which traditional Telangana dance form is known for its vibrant costumes and is performed to celebrate festivals and special occasions?",
            "options": ["Kuchipudi", "Garba", "Lambadi", "Kathak"],
            "answer": 2,
            "description": "Lambadi dance is performed by the Lambadi community in Telangana, known for its vibrant costumes and energetic performances during festivals and special occasions."
        },
        {
            "question": "The 'Pochampally' village in Telangana is famous for its traditional:",
            "options": ["Pottery", "Weaving", "Metalwork", "Carvings"],
            "answer": 1,
            "description": "Pochampally village is renowned for its traditional weaving of Ikat textiles, producing intricate patterns and high-quality fabrics."
        },
        {
            "question": "Which traditional food item from Telangana is made from rice and often cooked with yogurt and spices, served as a side dish?",
            "options": ["Pulao", "Biryani", "Pulagam", "Khichdi"],
            "answer": 2,
            "description": "Pulagam is a traditional Telangana dish made from rice and cooked with yogurt and spices, often served as a side dish or during special occasions."
        },
        {
            "question": "Which traditional dance form from Telangana is characterized by its use of sticks and is performed during festivals and cultural events?",
            "options": ["Dandia", "Koya", "Gussadi", "Cheraw"],
            "answer": 2,
            "description": "Gussadi is a traditional dance performed by the Koya tribe in Telangana, characterized by its use of sticks and vibrant, rhythmic movements."
        },
        {
            "question": "The traditional 'Ariselu' sweet is made from which primary ingredients?",
            "options": ["Wheat flour and sugar", "Rice flour and jaggery", "Maize flour and honey", "Chickpea flour and ghee"],
            "answer": 1,
            "description": "Ariselu is a traditional sweet made from rice flour and jaggery, commonly enjoyed during festivals like Sankranti in Telangana."
        },
        {
            "question": "The 'Gussadi' dance form is associated with which tribe in Telangana?",
            "options": ["Koya", "Lambadi", "Gonds", "Pochampally"],
            "answer": 2,
            "description": "The Gussadi dance is performed by the Gond tribe in Telangana, featuring traditional rhythms and vibrant movements during cultural and religious festivals."
        },
        {
            "question": "Which traditional Telangana festival involves the preparation of special dishes and the worship of nature deities for a good harvest?",
            "options": ["Bathukamma", "Ugadi", "Bonalu", "Sankranti"],
            "answer": 2,
            "description": "Bonalu is celebrated with special dishes and worship of nature deities to ensure a good harvest, involving vibrant processions and community gatherings."
        },
        {
            "question": "The traditional art form 'Nirmal Painting' is primarily known for its:",
            "options": ["Metalwork", "Pottery", "Wood carvings", "Miniature paintings"],
            "answer": 3,
            "description": "Nirmal Painting is a traditional art form from Telangana known for its intricate miniature paintings depicting mythological and religious themes."
        },
        {
            "question": "Which traditional festival in Telangana is celebrated by arranging a floral stack and performing traditional dances and songs?",
            "options": ["Ugadi", "Bathukamma", "Sankranti", "Bonalu"],
            "answer": 1,
            "description": "Bathukamma involves arranging a floral stack and performing traditional dances and songs to honor the goddess Bathukamma and celebrate the festival with joy."
        }
    ]
},
25:{
    "name": "Tripura",
    "questions": [
        {
            "question": "What is the capital city of Tripura?",
            "options": ["Agartala", "Udaipur", "Dharmanagar", "Ambassa"],
            "answer": 0,
            "description": "Agartala, the capital of Tripura, is known for its historical landmarks, including the Ujjayanta Palace. It is a cultural hub with influences from Bengal, Manipur, and the indigenous tribes of Tripura."
        },
        {
            "question": "Which Tripura palace is a grand structure showcasing a blend of Mughal and European architectural styles?",
            "options": ["Neermahal", "Ujjayanta Palace", "Kunjaban Palace", "Jampui Palace"],
            "answer": 1,
            "description": "Ujjayanta Palace, located in Agartala, was built by Maharaja Radha Kishore Manikya in the early 20th century. It now serves as a state museum, showcasing Tripura's cultural heritage."
        },
        {
            "question": "What is the traditional Tripuri dance performed during the Garia Puja festival?",
            "options": ["Ghoomar", "Hojagiri", "Kathak", "Manipuri"],
            "answer": 1,
            "description": "Hojagiri is a traditional dance of the Reang tribe, performed during the Garia Puja festival. Dancers balance earthen pots on their heads and move gracefully to the rhythm of folk music."
        },
        {
            "question": "Which Tripura lake is known for its picturesque beauty and historical significance, often referred to as the ‘Lake Palace of Tripura’?",
            "options": ["Rudrasagar Lake", "Dumbur Lake", "Amarpur Lake", "Kamalasagar Lake"],
            "answer": 0,
            "description": "Rudrasagar Lake, located near Melaghar, is home to Neermahal, the grand water palace built by Maharaja Bir Bikram Kishore. It’s a scenic spot, perfect for boat rides and bird watching."
        },
        {
            "question": "Which tribal festival in Tripura celebrates the New Year and involves offerings to the deity Garia?",
            "options": ["Kharchi Puja", "Garia Puja", "Durga Puja", "Ashokastami"],
            "answer": 1,
            "description": "Garia Puja is a significant tribal festival in Tripura, marking the New Year for many indigenous tribes. It involves offering prayers to the deity Garia for a prosperous harvest."
        },
        {
            "question": "What is the famous Tripuri dish made from bamboo shoots and pork?",
            "options": ["Wahan Mosdeng", "Mui Borok", "Berma", "Awan Bangwi"],
            "answer": 0,
            "description": "Wahan Mosdeng is a popular Tripuri dish made from pork and bamboo shoots, seasoned with spices. Its tangy flavor is a favorite among the tribal communities of Tripura."
        },
        {
            "question": "Which ancient temple in Tripura is dedicated to the Goddess Tripureswari and is one of the 51 Shakti Peethas?",
            "options": ["Kamakhya Temple", "Tripura Sundari Temple", "Jagannath Temple", "Laxmi Narayan Temple"],
            "answer": 1,
            "description": "The Tripura Sundari Temple, located in Udaipur, is one of the most revered Shakti Peethas. It is dedicated to Goddess Tripureswari, a form of the goddess Kali."
        },
        {
            "question": "Which river is considered the lifeline of Tripura and flows through its entire length?",
            "options": ["Gomati", "Teesta", "Brahmaputra", "Subansiri"],
            "answer": 0,
            "description": "The Gomati River is one of the most important rivers in Tripura, flowing through the state and supporting its agriculture. It holds spiritual significance as well, with temples located along its banks."
        },
        {
            "question": "Which dance form is performed by the Jamatia tribe during the Garia festival, celebrating the harvest season?",
            "options": ["Cheraw", "Lebang Boomani", "Garia Dance", "Lai Haraoba"],
            "answer": 2,
            "description": "The Garia Dance is a traditional tribal dance performed by the Jamatia tribe during the Garia festival. It celebrates the harvest season and is performed with folk songs and musical instruments."
        },
        {
            "question": "Which palace in Tripura, located on the banks of the Gomati River, was built as a summer retreat for the royal family?",
            "options": ["Ujjayanta Palace", "Neermahal Palace", "Kunjaban Palace", "Rajbari Palace"],
            "answer": 1,
            "description": "Neermahal, the 'Water Palace,' is situated in the middle of Rudrasagar Lake and was built by Maharaja Bir Bikram Kishore Manikya as a summer retreat. It is a blend of Hindu and Mughal architecture."
        },
        {
            "question": "Which Tripuri festival involves worshipping 14 deities and is celebrated with great pomp and show in Tripura?",
            "options": ["Kharchi Puja", "Garia Puja", "Durga Puja", "Basanta Panchami"],
            "answer": 0,
            "description": "Kharchi Puja is a major festival in Tripura, where 14 deities are worshipped with elaborate rituals. It symbolizes the purification of the earth and is celebrated with traditional songs and dances."
        },
        {
            "question": "Which Tripura lake, located in the Jampui Hills, is known for its scenic beauty and orange orchards?",
            "options": ["Khowra Lake", "Dumboor Lake", "Kamalasagar Lake", "Sabroom Lake"],
            "answer": 1,
            "description": "Dumboor Lake is a picturesque lake surrounded by the lush green hills of Jampui, famous for its natural beauty and the orange orchards in the region."
        },
        {
            "question": "What is the traditional Tripuri beverage made from rice and consumed during festivals and special occasions?",
            "options": ["Chhang", "Bhaang", "Lubsi", "Apong"],
            "answer": 2,
            "description": "Lubsi is a traditional fermented rice drink enjoyed by the tribal communities of Tripura during festivals. It is made by fermenting rice and has a mild alcoholic content."
        },
        {
            "question": "Which folk dance of Tripura is performed by the Mog tribe and is closely associated with their religious rituals?",
            "options": ["Hojagiri", "Lebang Boomani", "Sangrai Dance", "Cheraw Dance"],
            "answer": 2,
            "description": "The Sangrai Dance is performed by the Mog tribe of Tripura during the Sangrai festival, which is a religious festival celebrated with prayers, rituals, and community gatherings."
        },
        {
            "question": "Which wildlife sanctuary in Tripura is famous for being home to a large population of clouded leopards?",
            "options": ["Sepahijala Wildlife Sanctuary", "Trishna Wildlife Sanctuary", "Gumti Wildlife Sanctuary", "Rowa Wildlife Sanctuary"],
            "answer": 0,
            "description": "Sepahijala is known for its rich biodiversity and is home to the clouded leopard, along with many other species of animals and birds. It also serves as a research and education center."
        },
        {
            "question": "Which traditional Tripuri handicraft involves intricate cane and bamboo work, creating items like baskets and furniture?",
            "options": ["Pottery", "Basket Weaving", "Bamboo and Cane Craft", "Carpet Weaving"],
            "answer": 2,
            "description": "Tripura is famous for its bamboo and cane crafts, producing intricately woven baskets, furniture, and decorative items. These handicrafts are a major part of the state's cultural heritage."
        },
        {
            "question": "Which landmark in Tripura is a prominent Buddhist site, featuring rock-cut carvings and sculptures?",
            "options": ["Unakoti", "Pilak", "Mahamuni", "Deotamura"],
            "answer": 1,
            "description": "Pilak is an archaeological site known for its ancient Buddhist rock carvings and sculptures, showcasing the region’s rich history and its connection to Buddhism."
        },
        {
            "question": "What is the traditional Tripuri dish made from dried and fermented fish, often served with rice?",
            "options": ["Mui Borok", "Chakhwi", "Mosdeng Serma", "Berma"],
            "answer": 3,
            "description": "Berma is a fermented and dried fish dish that is a staple in Tripuri cuisine. It is often used in curries and chutneys and has a strong, distinctive flavor."
        },
        {
            "question": "Which river festival in Tripura is celebrated with boat races, music, and dance along the banks of the Gomati River?",
            "options": ["Gomati River Festival", "Ashokastami", "Durga Puja", "Karchi Puja"],
            "answer": 0,
            "description": "The Gomati River Festival celebrates the cultural and natural heritage of the Gomati River, with events such as boat races, folk dances, and music performances."
        },
        {
            "question": "Which temple in Tripura is dedicated to Lord Shiva and is an important pilgrimage site, especially during the annual fair?",
            "options": ["Matabari Temple", "Chaturdasha Temple", "Bhuvaneswari Temple", "Kamalasagar Kali Temple"],
            "answer": 2,
            "description": "Bhuvaneswari Temple, located on the banks of the Gomati River, is dedicated to Lord Shiva and is a significant pilgrimage site in Tripura."
        },
        {
            "question": "What is the name of the festival celebrated by the Tripuri tribe to mark the beginning of the harvest season?",
            "options": ["Basanta Panchami", "Garia Puja", "Wangala", "Baisakhi"],
            "answer": 1,
            "description": "Garia Puja is celebrated to honor the deity Garia and marks the beginning of the harvest season. Offerings are made for good crops and a prosperous future."
        },
        {
            "question": "Which architectural site in Tripura features intricate carvings on a hill and is often referred to as the 'Ajanta of the East'?",
            "options": ["Unakoti", "Neermahal", "Pilak", "Chaturdasha Temple"],
            "answer": 0,
            "description": "Unakoti is known for its massive rock-cut carvings of Hindu deities and is a significant archaeological site in Tripura. It’s often referred to as the 'Ajanta of the East' due to its intricate carvings."
        },
        {
            "question": "Which Tripuri festival involves the worship of bamboo and celebrates its cultural and practical significance in tribal life?",
            "options": ["Garia Puja", "Buisu Festival", "Sangrai Festival", "Ashokastami"],
            "answer": 1,
            "description": "Buisu is a traditional festival of the Tripuri people, where bamboo is worshipped for its significance in their daily lives, from food to shelter, and the festival marks the New Year."
        },
        {
            "question": "What is the traditional folk music of Tripura, which is accompanied by the playing of bamboo flutes and drums?",
            "options": ["Langa-Kerban", "Basanta Raag", "Jhumur", "Khol"],
            "answer": 0,
            "description": "Langa-Kerban is the traditional folk music of Tripura, performed with bamboo flutes and drums, reflecting the harmony between nature and life in tribal communities."
        },
        {
            "question": "Which architectural landmark in Tripura was built as a royal garden for Maharaja Bir Bikram Kishore Manikya?",
            "options": ["Kunjaban Palace", "Rajbari Palace", "Ujjayanta Palace", "Neermahal Palace"],
            "answer": 0,
            "description": "Kunjaban Palace, located in Agartala, was built as a royal retreat for Maharaja Bir Bikram and is now used as the official residence of the Governor of Tripura. Its gardens are famous for their beauty."
        }
    ]
},
26:{
    "name": "Uttarakhand",
    "questions": [
        {
            "question": "Which festival in Uttarakhand marks the beginning of the harvesting season?",
            "options": ["Makar Sankranti", "Holi", "Harela", "Diwali"],
            "answer": 2,
            "description": "Harela is celebrated in Uttarakhand to mark the onset of the monsoon and the sowing season, especially in the Kumaon region."
        },
        {
            "question": "What is the traditional folk dance of Uttarakhand?",
            "options": ["Kathak", "Bhangra", "Chholiya", "Garba"],
            "answer": 2,
            "description": "Chholiya is a traditional sword dance performed mainly by the Rajputs of Kumaon during weddings and other occasions to represent valor."
        },
        {
            "question": "Which famous temple in Uttarakhand is part of the Char Dham pilgrimage?",
            "options": ["Vaishno Devi", "Kedarnath", "Rameshwaram", "Somnath"],
            "answer": 1,
            "description": "Kedarnath is one of the four sacred sites of the Char Dham, dedicated to Lord Shiva, located in the Garhwal Himalayas."
        },
        {
            "question": "Which festival is celebrated by the Jaunsari tribe of Uttarakhand?",
            "options": ["Diwali", "Makar Sankranti", "Magh Mela", "Bissu"],
            "answer": 3,
            "description": "Bissu is a significant festival of the Jaunsari tribe, marking the beginning of the new year and the harvest season."
        },
        {
            "question": "Which wildlife sanctuary in Uttarakhand is known for the conservation of the musk deer?",
            "options": ["Nanda Devi", "Jim Corbett", "Govind Wildlife Sanctuary", "Rajaji National Park"],
            "answer": 2,
            "description": "Govind Wildlife Sanctuary is famous for conserving the endangered musk deer, an important species in Uttarakhand."
        },
        {
            "question": "What is the traditional art form of wall painting in Uttarakhand called?",
            "options": ["Pithora", "Aipan", "Madhubani", "Warli"],
            "answer": 1,
            "description": "Aipan is a traditional Kumaoni art form used for decorating walls and floors, especially during religious ceremonies and festivals."
        },
        {
            "question": "Which famous fair in Uttarakhand is held every 12 years and attracts millions of pilgrims?",
            "options": ["Kumbh Mela", "Pushkar Mela", "Surajkund Mela", "Sonepur Mela"],
            "answer": 0,
            "description": "The Kumbh Mela, held in Haridwar every 12 years, is one of the largest religious gatherings in the world, drawing millions of pilgrims."
        },
        {
            "question": "In which region of Uttarakhand is the folk song genre 'Jhora' popular?",
            "options": ["Garhwal", "Kumaon", "Doon Valley", "Nainital"],
            "answer": 1,
            "description": "Jhora is a popular folk song genre in the Kumaon region, often sung during social gatherings and festivals."
        },
        {
            "question": "Which of the following is a famous traditional attire worn by women in Uttarakhand?",
            "options": ["Mekhela Chador", "Ghagra-Choli", "Rangwali Pichhora", "Phiran"],
            "answer": 2,
            "description": "The Rangwali Pichhora is a traditional garment worn by women during important ceremonies, especially weddings, in Uttarakhand."
        },
        {
            "question": "Which river originates from the Gangotri Glacier in Uttarakhand?",
            "options": ["Yamuna", "Narmada", "Ganga", "Brahmaputra"],
            "answer": 2,
            "description": "The Ganga River originates from the Gangotri Glacier in Uttarakhand and is considered sacred by Hindus."
        },
        {
            "question": "What is the main occupation of the people in rural Uttarakhand?",
            "options": ["Fishing", "Farming", "Mining", "Pottery"],
            "answer": 1,
            "description": "Agriculture is the primary occupation in rural Uttarakhand, with crops like rice, wheat, and pulses commonly grown."
        },
        {
            "question": "Which sacred lake in Uttarakhand is associated with the Pandavas from the Mahabharata?",
            "options": ["Dal Lake", "Bhimtal", "Hemkund", "Roopkund"],
            "answer": 3,
            "description": "Roopkund, also known as the 'Mystery Lake,' is associated with legends of the Pandavas and contains skeletal remains, adding to its intrigue."
        },
        {
            "question": "Which hill station in Uttarakhand is called the ‘Queen of the Hills’?",
            "options": ["Mussoorie", "Nainital", "Almora", "Lansdowne"],
            "answer": 0,
            "description": "Mussoorie, located in the Garhwal region, is a popular hill station known as the ‘Queen of the Hills’ due to its scenic beauty and pleasant climate."
        },
        {
            "question": "Which is the largest glacier in Uttarakhand?",
            "options": ["Gangotri Glacier", "Zemu Glacier", "Milam Glacier", "Siachen Glacier"],
            "answer": 0,
            "description": "The Gangotri Glacier is the largest glacier in Uttarakhand, and it serves as the source of the River Ganga."
        },
        {
            "question": "Which dance form is performed to celebrate weddings in Garhwal?",
            "options": ["Rasleela", "Pandav Nritya", "Thali Dance", "Barada Nati"],
            "answer": 3,
            "description": "Barada Nati is a popular dance form in the Garhwal region, performed during weddings and festive occasions."
        },
        {
            "question": "Which community in Uttarakhand follows the Bon religion, an ancient pre-Buddhist faith?",
            "options": ["Garhwalis", "Tharus", "Bhutias", "Bhotiyas"],
            "answer": 3,
            "description": "The Bhotiyas, an indigenous community in Uttarakhand, follow the Bon religion, which predates Tibetan Buddhism."
        },
        {
            "question": "Which of the following is a UNESCO World Heritage Site in Uttarakhand?",
            "options": ["Valley of Flowers", "Rajaji National Park", "Nanda Devi Biosphere Reserve", "Jim Corbett National Park"],
            "answer": 2,
            "description": "The Nanda Devi Biosphere Reserve, known for its biodiversity and stunning landscapes, is a UNESCO World Heritage Site."
        },
        {
            "question": "Which traditional musical instrument is commonly used in Uttarakhand folk music?",
            "options": ["Tabla", "Dhol", "Sarangi", "Sitar"],
            "answer": 1,
            "description": "The dhol is widely used in Uttarakhand's folk music, especially during festivals and social gatherings."
        },
        {
            "question": "Which animal is the state animal of Uttarakhand?",
            "options": ["Snow Leopard", "Tiger", "Musk Deer", "Red Panda"],
            "answer": 2,
            "description": "The musk deer, an endangered species, is the state animal of Uttarakhand, known for the valuable musk gland."
        },
        {
            "question": "In Uttarakhand, 'Bagwal' is a traditional event held during which festival?",
            "options": ["Raksha Bandhan", "Holi", "Janmashtami", "Diwali"],
            "answer": 0,
            "description": "Bagwal is a stone-pelting festival held during Raksha Bandhan at the Devidhura temple, where two groups hurl stones at each other as part of an ancient tradition."
        },
        {
            "question": "Which historical fort in Uttarakhand was once the capital of the Chand dynasty?",
            "options": ["Almora Fort", "Pithoragarh Fort", "Banasur Fort", "Srinagar Fort"],
            "answer": 1,
            "description": "Pithoragarh Fort was an important stronghold of the Chand dynasty, reflecting the rich history of the Kumaon region."
        },
        {
            "question": "Which tree is considered sacred in Uttarakhand and associated with folk traditions?",
            "options": ["Peepal", "Deodar", "Oak", "Banyan"],
            "answer": 1,
            "description": "The deodar tree is revered in Uttarakhand for its spiritual significance and is commonly found in temple complexes and forested areas."
        },
        {
            "question": "Which lake in Uttarakhand is named after a Hindu goddess and attracts pilgrims?",
            "options": ["Bhimtal", "Naukuchiatal", "Naini Lake", "Hemkund"],
            "answer": 2,
            "description": "Naini Lake in Nainital is named after Goddess Naina Devi, and it holds religious significance for pilgrims."
        },
        {
            "question": "What is the famous pilgrimage route connecting the four sacred shrines in Uttarakhand known as?",
            "options": ["Amarnath Yatra", "Char Dham Yatra", "Vaishno Devi Yatra", "Kailash Mansarovar Yatra"],
            "answer": 1,
            "description": "The Char Dham Yatra connects the four sacred shrines—Yamunotri, Gangotri, Kedarnath, and Badrinath—important to Hindu pilgrims."
        },
        {
            "question": "Which is the main language spoken by the people of Uttarakhand?",
            "options": ["Hindi", "Kumaoni", "Garhwali", "Both B and C"],
            "answer": 3,
            "description": "Both Kumaoni and Garhwali are widely spoken in their respective regions, alongside Hindi, the official language of the state."
        }
    ]
},
27:{
    "name": "Uttar Pradesh",
    "questions": [
        {
            "question": "Which city in Uttar Pradesh is known as the 'City of Nawabs' for its rich Mughal history and architecture?",
            "options": ["Kanpur", "Lucknow", "Varanasi", "Allahabad"],
            "answer": 1,
            "description": "Lucknow is renowned for its Nawabi era grandeur, including its Mughal architecture, cuisine, and cultural refinement. Key landmarks include Bara Imambara and Chota Imambara."
        },
        {
            "question": "What is the traditional cuisine of Uttar Pradesh made from lentils and flour dumplings, served in a spicy curry?",
            "options": ["Puri Sabzi", "Tehri", "Bedhai", "Baati Chokha"],
            "answer": 3,
            "description": "Baati Chokha is a traditional dish from eastern Uttar Pradesh, featuring baked wheat dumplings (baati) served with mashed vegetables (chokha) and a tangy curry."
        },
        {
            "question": "Which temple town in Uttar Pradesh is considered the birthplace of Lord Rama and is a major pilgrimage site for Hindus?",
            "options": ["Mathura", "Ayodhya", "Vrindavan", "Chitrakoot"],
            "answer": 1,
            "description": "Ayodhya is revered as the birthplace of Lord Rama, holding immense religious significance and being a major spiritual destination due to its connection to the Ramayana."
        },
        {
            "question": "Which UNESCO World Heritage Site in Uttar Pradesh is an iconic symbol of love and is one of the Seven Wonders of the World?",
            "options": ["Fatehpur Sikri", "Agra Fort", "Qutub Minar", "Taj Mahal"],
            "answer": 3,
            "description": "The Taj Mahal, located in Agra, is renowned for its architectural beauty and is a symbol of eternal love, built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal."
        },
        {
            "question": "Which festival in Varanasi celebrates the connection between life and death, with grand processions and a display of cultural performances?",
            "options": ["Dev Deepawali", "Diwali", "Holi", "Maha Shivaratri"],
            "answer": 0,
            "description": "Dev Deepawali, celebrated 15 days after Diwali, involves lighting the ghats of Varanasi with lamps and features grand celebrations marking the return of gods to earth."
        },
        {
            "question": "Which city in Uttar Pradesh is famous for being the home of the ancient university Nalanda, attracting scholars from across Asia?",
            "options": ["Varanasi", "Prayagraj", "Kanpur", "Kushinagar"],
            "answer": 0,
            "description": "Varanasi, one of the oldest cities in the world, was a center of learning and attracted scholars from across Asia. It is also significant for its spiritual importance along the Ganges."
        },
        {
            "question": "Which traditional dance form of Uttar Pradesh is inspired by Lord Krishna’s life and performed with graceful hand movements and expressions?",
            "options": ["Kathak", "Bharatnatyam", "Kuchipudi", "Odissi"],
            "answer": 0,
            "description": "Kathak is a classical dance form originating from North India, characterized by its intricate footwork, expressions, and hand gestures, with Uttar Pradesh being its cultural hub."
        },
        {
            "question": "Which major festival in Uttar Pradesh involves the worship of the Sun God and is particularly celebrated in the eastern part of the state?",
            "options": ["Diwali", "Holi", "Chhath Puja", "Makar Sankranti"],
            "answer": 2,
            "description": "Chhath Puja honors the Sun God with prayers and offerings made during sunrise and sunset, predominantly observed along the rivers in eastern Uttar Pradesh."
        },
        {
            "question": "Which Mughal-era fort in Uttar Pradesh served as the main residence of the Mughal emperors until 1638?",
            "options": ["Agra Fort", "Fatehpur Sikri", "Red Fort", "Chunar Fort"],
            "answer": 0,
            "description": "Agra Fort was the primary residence of the Mughal emperors before the capital was moved to Delhi. It features significant structures such as the Jahangir Palace and Diwan-i-Khas."
        },
        {
            "question": "Which city in Uttar Pradesh is known for its intricate Banarasi silk sarees, often worn during weddings and festive occasions?",
            "options": ["Varanasi", "Lucknow", "Kanpur", "Mathura"],
            "answer": 0,
            "description": "Varanasi is famous for its Banarasi silk sarees, known for their elaborate zari work and luxurious fabric. These sarees are a symbol of tradition and elegance, especially in weddings."
        },
        {
            "question": "Which river confluence in Uttar Pradesh is the site of the world’s largest religious gathering, the Kumbh Mela?",
            "options": ["Yamuna and Saraswati", "Ganga and Yamuna", "Ganga and Gomti", "Yamuna and Chambal"],
            "answer": 1,
            "description": "The Kumbh Mela takes place at the Sangam in Prayagraj, where the Ganga, Yamuna, and mythical Saraswati rivers meet, drawing millions of pilgrims for the largest religious gathering in the world."
        },
        {
            "question": "Which folk painting style, native to Uttar Pradesh, is known for its vibrant colors and depiction of Hindu deities?",
            "options": ["Pattachitra", "Warli", "Madhubani", "Sanjhi"],
            "answer": 3,
            "description": "Sanjhi art is a traditional form from Uttar Pradesh, associated with stenciled depictions of Hindu deities and mythological scenes, particularly during festivals like Janmashtami."
        },
        {
            "question": "Which festival in Uttar Pradesh is celebrated with a symbolic re-enactment of the Ramayana, known as Ramlila?",
            "options": ["Holi", "Diwali", "Dussehra", "Janmashtami"],
            "answer": 2,
            "description": "Dussehra is marked by the performance of Ramlila, an elaborate enactment of the Ramayana that celebrates Lord Rama's victory over Ravana, featuring grand performances across Uttar Pradesh."
        },
        {
            "question": "Which city in Uttar Pradesh is famous for its traditional leather industry, producing high-quality leather products?",
            "options": ["Lucknow", "Kanpur", "Varanasi", "Aligarh"],
            "answer": 1,
            "description": "Kanpur is renowned for its leather industry, producing a range of high-quality leather products including shoes, belts, and bags, making it a major center for leather manufacturing in India."
        },
        {
            "question": "Which ancient pilgrimage town in Uttar Pradesh is associated with Lord Krishna’s early life and is a major Hindu religious site?",
            "options": ["Mathura", "Ayodhya", "Chitrakoot", "Jhansi"],
            "answer": 0,
            "description": "Mathura is considered the birthplace of Lord Krishna and is a major religious site, known for its temples and festivals like Janmashtami."
        },
        {
            "question": "Which Mughal-era garden in Agra is laid out in the Charbagh style and offers a stunning view of the Taj Mahal?",
            "options": ["Shalimar Bagh", "Nishat Bagh", "Mehtab Bagh", "Pinjore Gardens"],
            "answer": 2,
            "description": "Mehtab Bagh, located across the Yamuna River from the Taj Mahal, provides a stunning view of the monument, especially at sunset, and is designed in the traditional Mughal Charbagh style."
        },
        {
            "question": "Which dish from Uttar Pradesh consists of deep-fried bread served with spicy potato curry and is a popular breakfast choice?",
            "options": ["Puri Sabzi", "Chole Bhature", "Litti Chokha", "Dhokla"],
            "answer": 0,
            "description": "Puri Sabzi is a popular breakfast dish in Uttar Pradesh featuring deep-fried puris served with a spicy potato curry, commonly enjoyed during festivals and family gatherings."
        },
        {
            "question": "Which festival in Uttar Pradesh involves offering prayers and bathing in the Ganges River to honor the souls of ancestors?",
            "options": ["Makar Sankranti", "Pitru Paksha", "Raksha Bandhan", "Bhai Dooj"],
            "answer": 1,
            "description": "Pitru Paksha is a 15-day period in the Hindu calendar dedicated to paying homage to ancestors with food offerings and rituals, often performed along the Ganges River."
        },
        {
            "question": "Which historical landmark in Uttar Pradesh was built by Emperor Akbar and served as the Mughal capital for a brief period?",
            "options": ["Red Fort", "Buland Darwaza", "Fatehpur Sikri", "Sikandra"],
            "answer": 2,
            "description": "Fatehpur Sikri, constructed by Emperor Akbar, was the Mughal capital for a short time and is known for its stunning architecture including the Buland Darwaza and Jama Masjid."
        },
        {
            "question": "Which popular folk music style from Uttar Pradesh is sung to praise and invoke Lord Krishna and his divine plays?",
            "options": ["Thumri", "Kajri", "Dhrupad", "Qawwali"],
            "answer": 0,
            "description": "Thumri is a semi-classical music form from Uttar Pradesh, often focusing on romantic and devotional themes related to Lord Krishna’s life, characterized by its expressive and emotional style."
        },
        {
            "question": "Which city in Uttar Pradesh is renowned for its unique 'Chikankari' embroidery, a delicate and intricate handwork on fabrics?",
            "options": ["Varanasi", "Lucknow", "Agra", "Kanpur"],
            "answer": 1,
            "description": "Lucknow is famous for Chikankari, a traditional embroidery technique involving intricate handwork on fabrics such as muslin, silk, and chiffon, creating detailed floral patterns."
        },
        {
            "question": "Which wildlife sanctuary in Uttar Pradesh is a haven for migratory birds and is located near the Indo-Nepal border?",
            "options": ["Dudhwa National Park", "Jim Corbett National Park", "Keoladeo National Park", "Ranthambore National Park"],
            "answer": 0,
            "description": "Dudhwa National Park is a significant wildlife sanctuary located near the Indo-Nepal border, known for its diverse flora and fauna, including tigers, rhinos, and numerous migratory bird species."
        },
        {
            "question": "Which traditional sweet dish from Uttar Pradesh is made from condensed milk and is often flavored with cardamom and saffron?",
            "options": ["Jalebi", "Gulab Jamun", "Malaiyo", "Petha"],
            "answer": 2,
            "description": "Malaiyo is a frothy and creamy dessert from Varanasi, made from milk and flavored with cardamom, saffron, and sometimes pistachios. It is a seasonal delicacy enjoyed especially in winter."
        },
        {
            "question": "Which ancient city in Uttar Pradesh is considered one of the seven sacred cities in Hinduism and is known for its Kumbh Mela?",
            "options": ["Varanasi", "Ayodhya", "Haridwar", "Prayagraj"],
            "answer": 3,
            "description": "Prayagraj, formerly known as Allahabad, is one of the seven sacred cities in Hinduism and hosts the Kumbh Mela at the confluence of the Ganga, Yamuna, and Saraswati rivers."
        },
        {
            "question": "Which palace in Uttar Pradesh was built as a hunting lodge by the Nawabs of Awadh and later turned into a museum?",
            "options": ["Bara Imambara", "Chota Imambara", "Constantia House", "Kaiserbagh Palace"],
            "answer": 3,
            "description": "Kaiserbagh Palace, built by Nawab Wajid Ali Shah, was originally a royal residence and hunting lodge. It now houses a museum that showcases the culture and history of Awadh."
        }
    ]
},
28:{
  "name": "West Bengal",
  "questions": [
    {
      "question": "What is the official language of West Bengal?",
      "options": [
        "a) Bengali",
        "b) Hindi",
        "c) Urdu",
        "d) English"
      ],
      "answer": "a) Bengali",
      "description": "Bengali is the official language of West Bengal and is spoken by the majority of its population. It is also a language rich in literature and history."
    },
    {
      "question": "Which famous festival is most associated with West Bengal?",
      "options": [
        "a) Diwali",
        "b) Durga Puja",
        "c) Holi",
        "d) Eid"
      ],
      "answer": "b) Durga Puja",
      "description": "Durga Puja is the most celebrated festival in West Bengal, honoring Goddess Durga’s victory over the buffalo demon Mahishasura."
    },
    {
      "question": "Who is regarded as the ‘Bard of Bengal’ and is the first non-European to win the Nobel Prize for Literature?",
      "options": [
        "a) Kazi Nazrul Islam",
        "b) Bankim Chandra Chattopadhyay",
        "c) Rabindranath Tagore",
        "d) Michael Madhusudan Dutt"
      ],
      "answer": "c) Rabindranath Tagore",
      "description": "Rabindranath Tagore is known for his poetry, novels, and songs. He won the Nobel Prize for his work “Gitanjali.”"
    },
    {
      "question": "Which dance form originates from West Bengal and is closely associated with the Bauls?",
      "options": [
        "a) Kathakali",
        "b) Bharatanatyam",
        "c) Baul Dance",
        "d) Odissi"
      ],
      "answer": "c) Baul Dance",
      "description": "The Baul dance and songs are part of a mystical tradition in Bengal. The Bauls are wandering minstrels known for their spiritual songs."
    },
    {
      "question": "What is the traditional handloom fabric of West Bengal called?",
      "options": [
        "a) Pashmina",
        "b) Kantha",
        "c) Jamdani",
        "d) Baluchari"
      ],
      "answer": "d) Baluchari",
      "description": "Baluchari is a traditional silk saree from Bengal known for its intricate designs, often depicting mythological scenes."
    },
    {
      "question": "Which is the capital city of West Bengal?",
      "options": [
        "a) Darjeeling",
        "b) Howrah",
        "c) Kolkata",
        "d) Siliguri"
      ],
      "answer": "c) Kolkata",
      "description": "Kolkata, formerly known as Calcutta, is the capital of West Bengal and a cultural and educational hub in India."
    },
    {
      "question": "Which historical figure founded the city of Kolkata?",
      "options": [
        "a) Robert Clive",
        "b) Job Charnock",
        "c) Warren Hastings",
        "d) Lord Curzon"
      ],
      "answer": "b) Job Charnock",
      "description": "Job Charnock, an employee of the East India Company, is traditionally credited with founding Kolkata in 1690."
    },
    {
      "question": "Which sweet dish is synonymous with Bengali cuisine?",
      "options": [
        "a) Rasgulla",
        "b) Jalebi",
        "c) Laddu",
        "d) Peda"
      ],
      "answer": "a) Rasgulla",
      "description": "Rasgulla, a soft, spongy dessert made from chhena (Indian cottage cheese), is a signature sweet of Bengal."
    },
    {
      "question": "Which is the most famous traditional folk theatre form of West Bengal?",
      "options": [
        "a) Nautanki",
        "b) Jatra",
        "c) Yakshagana",
        "d) Bhand Pather"
      ],
      "answer": "b) Jatra",
      "description": "Jatra is a popular form of folk theatre in Bengal known for its vibrant performances of mythological and historical stories."
    },
    {
      "question": "Which river flows through West Bengal and is considered sacred?",
      "options": [
        "a) Yamuna",
        "b) Ganga",
        "c) Godavari",
        "d) Narmada"
      ],
      "answer": "b) Ganga",
      "description": "The Ganga River is revered in West Bengal, and the city of Kolkata is situated on its banks."
    },
    {
      "question": "Who composed the Indian national anthem “Jana Gana Mana”?",
      "options": [
        "a) Swami Vivekananda",
        "b) Rabindranath Tagore",
        "c) Bankim Chandra Chattopadhyay",
        "d) Ishwar Chandra Vidyasagar"
      ],
      "answer": "b) Rabindranath Tagore",
      "description": "Rabindranath Tagore, a renowned poet from Bengal, composed the national anthem of India, “Jana Gana Mana.”"
    },
    {
      "question": "Which traditional festival celebrates the harvest and is popular in rural Bengal?",
      "options": [
        "a) Baisakhi",
        "b) Makar Sankranti",
        "c) Nabanna",
        "d) Pongal"
      ],
      "answer": "c) Nabanna",
      "description": "Nabanna is a harvest festival in West Bengal, celebrated with joy and feasts after the rice crop is harvested."
    },
    {
      "question": "Which Bengali personality was a leader of the Indian independence movement and founded the Indian National Army?",
      "options": [
        "a) Mahatma Gandhi",
        "b) Bal Gangadhar Tilak",
        "c) Subhas Chandra Bose",
        "d) Jawaharlal Nehru"
      ],
      "answer": "c) Subhas Chandra Bose",
      "description": "Subhas Chandra Bose, also known as Netaji, was a prominent freedom fighter from Bengal who led the Indian National Army against British rule."
    },
    {
      "question": "Which town in West Bengal is known for its tea production?",
      "options": [
        "a) Darjeeling",
        "b) Kalimpong",
        "c) Jalpaiguri",
        "d) Asansol"
      ],
      "answer": "a) Darjeeling",
      "description": "Darjeeling is famous worldwide for its tea plantations and is renowned for producing high-quality tea."
    },
    {
      "question": "Which cultural event in West Bengal marks the Bengali New Year?",
      "options": [
        "a) Durga Puja",
        "b) Poila Baisakh",
        "c) Holi",
        "d) Diwali"
      ],
      "answer": "b) Poila Baisakh",
      "description": "Poila Baisakh is the Bengali New Year celebrated with joy, processions, feasts, and cultural events in West Bengal."
    },
    {
      "question": "Which iconic structure in Kolkata is named after Queen Victoria?",
      "options": [
        "a) Howrah Bridge",
        "b) Victoria Memorial",
        "c) Fort William",
        "d) Eden Gardens"
      ],
      "answer": "b) Victoria Memorial",
      "description": "The Victoria Memorial is a grand marble building in Kolkata, built in memory of Queen Victoria and serving as a museum today."
    },
    {
      "question": "Which Bengali author wrote the novel “Anandamath,” which includes the national song “Vande Mataram”?",
      "options": [
        "a) Rabindranath Tagore",
        "b) Kazi Nazrul Islam",
        "c) Bankim Chandra Chattopadhyay",
        "d) Sarat Chandra Chattopadhyay"
      ],
      "answer": "c) Bankim Chandra Chattopadhyay",
      "description": "Bankim Chandra Chattopadhyay’s novel 'Anandamath' played a significant role in inspiring Indian nationalists, and 'Vande Mataram' became a symbol of freedom."
    },
    {
      "question": "Which Bengali martial art form is performed with sticks and swords?",
      "options": [
        "a) Silambam",
        "b) Kalaripayattu",
        "c) Lathi Khela",
        "d) Gatka"
      ],
      "answer": "c) Lathi Khela",
      "description": "Lathi Khela is a traditional Bengali martial art form that involves the use of sticks and swords, showcasing agility and strength."
    },
    {
      "question": "Which style of painting is traditionally associated with West Bengal?",
      "options": [
        "a) Warli",
        "b) Madhubani",
        "c) Kalighat",
        "d) Pattachitra"
      ],
      "answer": "c) Kalighat",
      "description": "Kalighat paintings originated in the vicinity of the Kalighat temple in Kolkata and are known for their bold and fluid brushwork."
    },
    {
      "question": "Which river, originating in the Himalayas, flows through West Bengal and is essential for its agriculture?",
      "options": [
        "a) Brahmaputra",
        "b) Ganga",
        "c) Yamuna",
        "d) Godavari"
      ],
      "answer": "b) Ganga",
      "description": "The Ganga River, originating in the Himalayas, is crucial for agriculture and life in West Bengal, providing fertile soil and water."
    },
    {
      "question": "Which Bengali poet is known as the ‘Rebel Poet’?",
      "options": [
        "a) Rabindranath Tagore",
        "b) Sarat Chandra Chattopadhyay",
        "c) Kazi Nazrul Islam",
        "d) Ishwar Chandra Vidyasagar"
      ],
      "answer": "c) Kazi Nazrul Islam",
      "description": "Kazi Nazrul Islam, known as the ‘Rebel Poet,’ wrote revolutionary and anti-colonial poetry and is celebrated in both India and Bangladesh."
    },
    {
      "question": "Which Bengali filmmaker is regarded as one of the greatest directors in world cinema?",
      "options": [
        "a) Satyajit Ray",
        "b) Ritwik Ghatak",
        "c) Mrinal Sen",
        "d) Raj Kapoor"
      ],
      "answer": "a) Satyajit Ray",
      "description": "Satyajit Ray, known for his 'Apu Trilogy,' is a legendary filmmaker from Bengal who brought Indian cinema to international prominence."
    },
    {
      "question": "Which temple in West Bengal is considered one of the 51 Shakti Peethas and is dedicated to Goddess Kali?",
      "options": [
        "a) Dakshineswar Temple",
        "b) Tarapith",
        "c) Kalighat Temple",
        "d) Belur Math"
      ],
      "answer": "c) Kalighat Temple",
      "description": "Kalighat Temple in Kolkata is one of the most revered temples dedicated to Goddess Kali and is considered one of the 51 Shakti Peethas."
    }
  ]
}
};
let currentLevel = 1;
let currentQuestionIndex = 0;
let score = 0;
let timer;

const totalQuestionsPerLevel = 10;
const requiredCorrectAnswers = 7;

const levelElement = document.getElementById('level');
const timerElement = document.getElementById('time');
const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const answerDescription = document.getElementById('answer-description');
const scoreElement = document.getElementById('score');
const restartBtn = document.getElementById('restart-btn');
const levelSummaryElement = document.getElementById('level-summary'); // New element for level summary

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    shuffleQuestions();  // Shuffle the questions at the start of the level
    loadQuestion();
    startTimer();
}

// Shuffle questions for the current level
function shuffleQuestions() {
    let levelData = levels[currentLevel];
    levelData.questions = levelData.questions.sort(() => Math.random() - 0.5);
}

function startTimer() {
    let timeLeft = 30;
    timer = setInterval(() => {
        timeLeft--;
        timerElement.innerText = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
            // When time runs out, show the correct answer and description
            showAnswer(false, true); // Pass true for timeOut
        }
    }, 1000);
}

function loadQuestion() {
    const levelData = levels[currentLevel];
    const currentQuestion = levelData.questions[currentQuestionIndex];
    levelElement.innerText = `Level ${currentLevel}: ${levelData.name}`;
    questionContainer.innerText = currentQuestion.question;
    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.addEventListener('click', () => checkAnswer(index));
        optionsContainer.appendChild(button);
    });
    answerDescription.innerText = "";
    nextBtn.style.display = "none";
}

function checkAnswer(selectedOption) {
    clearInterval(timer);
    const currentQuestion = levels[currentLevel].questions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.answer;
    showAnswer(isCorrect, false); // Pass false for timeOut
    if (isCorrect) score++;
}

function showAnswer(isCorrect, timeOut) {
    const currentQuestion = levels[currentLevel].questions[currentQuestionIndex];
    const buttons = optionsContainer.querySelectorAll('button');
    
    // Highlight the correct answer
    buttons.forEach((button, index) => {
        if (index === currentQuestion.answer) {
            button.classList.add('correct');
        } else {
            button.classList.add('incorrect');
        }
    });

    // Display the answer description
    answerDescription.innerText = currentQuestion.description;

    // If it's due to a timeout, don't update score and show next button
    if (timeOut) {
        answerDescription.innerText += " (Time ran out!)";
    }

    nextBtn.style.display = "block";
    if (currentQuestionIndex === totalQuestionsPerLevel - 1) {
        nextBtn.innerText = "Finish Level";
    }
}

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;

    // Check if we've reached the 10th question for the current level
    if (currentQuestionIndex < totalQuestionsPerLevel && currentQuestionIndex < levels[currentLevel].questions.length) {
        loadQuestion();
        startTimer();
    } else {
        // Show the score after finishing the level
        showLevelSummary();
    }
});

function showLevelSummary() {
    // Display the score for the current level
    levelSummaryElement.style.display = "block";
    scoreElement.innerText = `You scored ${score} out of ${totalQuestionsPerLevel}.`;

    // Check if the player has passed or failed
    if (score >= requiredCorrectAnswers) {
        levelSummaryElement.innerText = `Great job! You passed this level with a score of ${score}/${totalQuestionsPerLevel}. Click Next to proceed to the next level.`;
        nextBtn.innerText = "Next Level";
        nextBtn.style.display = "block";
        nextBtn.addEventListener('click', nextLevel);
    } else {
        levelSummaryElement.innerText = `You scored ${score}. You need at least ${requiredCorrectAnswers} to pass. Restarting this level...`;
        restartBtn.style.display = "block";
    }
}

function nextLevel() {
    currentLevel++;
    if (levels[currentLevel]) {
        scoreElement.innerText = `Great! Moving to Level ${currentLevel}.`;
        levelSummaryElement.style.display = "none";
        nextBtn.removeEventListener('click', nextLevel); // Remove previous event listener
        startQuiz();
    } else {
        // No more levels
        scoreElement.innerText = "Congratulations! You've completed all levels!";
    }
}

restartBtn.addEventListener('click', () => {
    restartBtn.style.display = "none";
    scoreElement.style.display = "none";
    levelSummaryElement.style.display = "none";
    startQuiz();
});

startQuiz();