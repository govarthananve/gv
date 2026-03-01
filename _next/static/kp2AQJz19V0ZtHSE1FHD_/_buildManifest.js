self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/css/:path*",
        "destination": "/css/:path*"
      },
      {
        "source": "/js/:path*",
        "destination": "/js/:path*"
      },
      {
        "source": "/images/:path*",
        "destination": "/images/:path*"
      }
    ],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()