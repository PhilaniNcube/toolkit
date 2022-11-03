export interface IProject {
  id: number;
  slug: string;
  title: string;
  intervention: string[];
  topics: string[];
  duration: string[];
  age: string[];
  image: {
    url: string;
    width: number;
    height: number;
  };
  logo: string;
  description: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  contact: string;
  tel: string;
  partners: [{
    name: string;
    province: string;
  }]
}

export const  projects = [
  {
    id: 1,
    slug: 'masifunde_learn_for_life',
    title: "Masifunde Learn For Life",
    intervention: ["Peer-to-peer", "Small Group"],
    topics: ["Health", "Education", "Evironment"],
    duration: ["Ongoing"],
    age: ["Primary School", "High School"],
    image: {
      url: "https://images.unsplash.com/photo-1636783187659-3804c75da971?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80",
      width: 1920,
      height: 1078,
    },
    logo: "",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis libero temporibus facere ratione distinctio numquam adipisci reprehenderit maxime ullam architecto sunt hic dicta accusamus, aut accusantium, error quis. Atque, voluptas suscipit necessitatibus aspernatur tempora delectus?",
    address: '2 8 th Avenue, Gqeberha',
    coordinates: {
      lat: -33.976075467317116,
      lng: 25.587621982362624
    },
    contact: "Fundile Makhosi",
    tel: '041 581 2543',
    partners: [{
      name: "Hullabaloo",
      province: "KwaZulu-Natal"
    },
  {
      name: "Amandla",
      province: "Western Cape"
    }
  ]
  },
  {
    id: 2,
    slug: 'alternatives_to_violence_project',
    title: "Alternatives To Violence Project",
    intervention: ["Train-the-trainer", "Small Group"],
    topics: ["Conflict Resolution", "Peace"],
    duration: ["Phased"],
    age: ["Primary School", "High School", "Post School"],
    image: {
      url: "https://images.unsplash.com/photo-1602058176018-7915d6bd37ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      width: 1920,
      height: 1280,
    },
    logo: "",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis libero temporibus facere ratione distinctio numquam adipisci reprehenderit maxime ullam architecto sunt hic dicta accusamus, aut accusantium, error quis. Atque, voluptas suscipit necessitatibus aspernatur tempora delectus?",
     address: 'Floor 3, Braamfontein, 33 Hoofd St, Braampark, Johannesburg, 2001',
    coordinates: {
      lat:  -26.189075475926604,
      lng: 28.038311753329392
    },
    contact: "Fundile Makhosi",
    tel: '0114035650',
    partners: [{
      name: "Center For The Study Of Violence",
      province: "Gauteng"
    },

  ]
  },
  {
    id: 3,
    slug: 'youth_for_safer_communities',
    title: "Youth For Safer Communities (YSC)",
    intervention: ["Peer-to-Peer"],
    topics: ["School Safety", "Community Safety"],
    duration: ["Phased"],
    age: ["High School"],
    image: {
      url: "https://images.unsplash.com/photo-1526583644846-cd206236cd7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      width: 1920,
      height: 1280,
    },
    logo: "",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis libero temporibus facere ratione distinctio numquam adipisci reprehenderit maxime ullam architecto sunt hic dicta accusamus, aut accusantium, error quis. Atque, voluptas suscipit necessitatibus aspernatur tempora delectus?",
     address: '2 8 th Avenue, Gqeberha',
    coordinates: {
      lat: -25.748589871493248,
      lng:  28.18794999749867
    },
    contact: "Fundile Makhosi",
    tel: '041 581 2543',
    partners: [{
      name: "Hullabaloo",
      province: "KwaZulu-Natal"
    },
  {
      name: "Amandla",
      province: "Western Cape"
    }
  ]
  },
  {
    id: 4,
    slug: 'agape_youth_project',
    title: "Agape Youth Project",
    intervention: ["Peer-to-Peer"],
    topics: ["School Safety", "Community Safety"],
    duration: ["Phased"],
    age: ["High School"],
    image: {
      url: "https://images.unsplash.com/photo-1526583644846-cd206236cd7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      width: 1920,
      height: 1280,
    },
    logo: "",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis libero temporibus facere ratione distinctio numquam adipisci reprehenderit maxime ullam architecto sunt hic dicta accusamus, aut accusantium, error quis. Atque, voluptas suscipit necessitatibus aspernatur tempora delectus?",
    address: '190 Thabo Sehume St, Pretoria Central, Pretoria, 0002',
    coordinates: {
      lat: -25.74582827774175,
      lng:28.190643809141747
    },
    contact: "Fundile Makhosi",
    tel: '041 581 2543',
    partners: [{
      name: "Agape Youth Movement",
      province: "Gauteng"
    },

  ]
  },
]

