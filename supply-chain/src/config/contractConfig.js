const contractAddress = "0xC4B34b7aCdFbC0AE4F6510660227c4D15A67C135";

const contractABI = [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "productId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "string",
          name: "name",
          type: "string",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "price",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "string",
          name: "manufacturerName",
          type: "string",
        },
        {
          indexed: false,
          internalType: "string",
          name: "manufacturerDetails",
          type: "string",
        },
        {
          indexed: false,
          internalType: "string",
          name: "longitude",
          type: "string",
        },
        {
          indexed: false,
          internalType: "string",
          name: "latitude",
          type: "string",
        },
        {
          indexed: false,
          internalType: "string",
          name: "category",
          type: "string",
        },
      ],
      name: "ProductAdded",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "productId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "logisticsPartner",
          type: "address",
        },
      ],
      name: "ProductAssignedToCourier",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "productId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "customer",
          type: "address",
        },
      ],
      name: "ProductAssignedToCustomer",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "productId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "string",
          name: "certificateAuthority",
          type: "string",
        },
        {
          indexed: false,
          internalType: "string",
          name: "certificateDocHash",
          type: "string",
        },
      ],
      name: "ProductCertified",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "productId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "string",
          name: "deliveryStatus",
          type: "string",
        },
        {
          indexed: false,
          internalType: "address",
          name: "logisticsPartner",
          type: "address",
        },
      ],
      name: "ProductDelivered",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_id",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "_name",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "_price",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "_manufacturerName",
          type: "string",
        },
        {
          internalType: "string",
          name: "_manufacturerDetails",
          type: "string",
        },
        {
          internalType: "string",
          name: "_longitude",
          type: "string",
        },
        {
          internalType: "string",
          name: "_latitude",
          type: "string",
        },
        {
          internalType: "string",
          name: "_category",
          type: "string",
        },
      ],
      name: "addProduct",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_productId",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "_certificateAuthority",
          type: "string",
        },
        {
          internalType: "string",
          name: "_digitalSignature",
          type: "string",
        },
        {
          internalType: "string",
          name: "_certificateDocHash",
          type: "string",
        },
      ],
      name: "certifyProduct",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_productId",
          type: "uint256",
        },
      ],
      name: "assignCourier",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_productId",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "_deliveryStatus",
          type: "string",
        },
      ],
      name: "markAsDelivered",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_productId",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "_customer",
          type: "address",
        },
      ],
      name: "assignToCustomer",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_id",
          type: "uint256",
        },
      ],
      name: "getProduct",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "price",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "manufacturerName",
              type: "string",
            },
            {
              internalType: "string",
              name: "manufacturerDetails",
              type: "string",
            },
            {
              internalType: "string",
              name: "longitude",
              type: "string",
            },
            {
              internalType: "string",
              name: "latitude",
              type: "string",
            },
            {
              internalType: "string",
              name: "category",
              type: "string",
            },
            {
              internalType: "address",
              name: "manufacturer",
              type: "address",
            },
            {
              internalType: "address",
              name: "logisticsPartner",
              type: "address",
            },
            {
              internalType: "address",
              name: "customer",
              type: "address",
            },
            {
              internalType: "string",
              name: "deliveryStatus",
              type: "string",
            },
            {
              internalType: "string",
              name: "certificateAuthority",
              type: "string",
            },
            {
              internalType: "string",
              name: "digitalSignature",
              type: "string",
            },
            {
              internalType: "string",
              name: "certificateDocHash",
              type: "string",
            },
            {
              internalType: "bool",
              name: "isCertified",
              type: "bool",
            },
          ],
          internalType: "struct ProductNewTrack.Product",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
      constant: true,
    },
    {
      inputs: [],
      name: "getAllProductIds",
      outputs: [
        {
          internalType: "uint256[]",
          name: "",
          type: "uint256[]",
        },
      ],
      stateMutability: "view",
      type: "function",
      constant: true,
    },
  ];

  export { contractAddress, contractABI };