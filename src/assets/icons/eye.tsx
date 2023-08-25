import * as React from 'react';
import Svg, { SvgProps, Path, Defs, Pattern, Use, Image } from 'react-native-svg';
export const EyeIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h24.5v24.5H0z" />
    <Defs>
      <Pattern id="a" width={1} height={1} patternContentUnits="objectBoundingBox">
        <Use xlinkHref="#b" transform="scale(.0204)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAxCAYAAABznEEcAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUtSURBVHgB7Vi9VhtHFL53lh8Lg63EIRJQeAP4HJdKR4fo3Bk/AVDlpII3QDwB+AmQn8By5w65S2foOCeAx4WDAJ94cyIfA2JncmfQrkZiV7MSpEn2a9gR83O/uf8DkCJFihQpUvzHgXDHyGbd7ODgoOs4fkGNBcBjRPBQwl8AjPs+emdnv+/CHeJOSOTzrgtsYFlKOU87FkBCFrqf6kkJVSahAuC/q9U4h1vgViTy+dmiRLlOn0W4BWiPMhNio18yfZGwCi+B0867pBmPRpxuPUsmlUVA0li8pvol0xMJZe/DI842CbEINwWvkv2XG+f+G8/jXrd9xqfcAhNsnqReJAmKN4RC3Kj9cVCChEhMQt8+k6/bblHZtpBbl+fipU3w+H2fugIa66Sp5fb/SI5SLCTRSiIS+cnZEpnGuvmbIOEbF2IjTnjt7MDI7OChPkiyvfPzq934+U9dyS7pkrAQ0gDwwIeV09PDCtyGRG5qZovi5GrrF8l9KZY/1/i7aGGmlyXiEsT4i83ucxOza6D8zdC4zby6kshPzJTpNpZaEkAVwV+JEkD7S8Z5DQkjVTfBtFawsUOfbpL5DsRAa0DCL8GYIkz5tHb4ol73vCgCQxm2Q9FnriUlqHlvyeze0trf6H/n9JtrLCuOPXiE9b//rHbuV69/9sZGc2+A+UXaKG+bH6mJTh+g79Jp7WgDYvDj5Mw2ZeTlYBznL5E3LJGc96Aata/rutlvl2zH9BN1Tq12+KorCW2TIDeTEpiaelK4EuJ90vnXZ8woIsXmCn5yfPRT3NxOIsrZmfR/Nk2amQvUTQG2RaGKTaCGFKsGgbJtvkJm2H/RNDcCuip8x83lnHuZIbGgPvVssl6JbEeZMESR0KoOo4LkF9/8FbCANg0Tn/TFS0gAJZjKL8GYot1z23yUgwsm8eEMW79BQoVGCGxVV51iwZbAdC5oklZqPjvjyatTxL1QCGzZfBxqtX1Ot2xoGdcCbYQkBOB88K1uqff6RfaUsSVjPPxGmU2y5uT4YIvMPbyo4WHQMhvmJHkoEJUAps39G3D8luAUoRJdgLYWM1IhaG2GJEbukT0bNjc04mzaNtXaMtaMjz+xmkUAiS0/kMYFQiwBFZ7RDPvlwFpCEtrZJISOrOJxLje9ZtucJAjVywb8JUgAHQUBF1tniYptjcBLVQ24zUM5AxH6R1vG/lr/sj869h2puZl5EZ+NjX7P6/Uve3Gbj40++ghhBYpztvkK9x883KY/c4FAJ7UPv3abr8of2vtZMB5gzsLx8dF+MGadCzLDxNBwHoGw1c1Mmtm2Goypai2rjB8pDGlAJzqjHxESS2AhYNZvKpl++tTeo2PcYWZ5YCuJdVa9cN4DmLWR5ESoSmGP64MQi539ty27RxGImh9bxfZaSUbN74ZuBJp7KZMrJpnfvRSPEMzWD4xTGGTXUcSN3JTKeR/8Unw/ovv37bYzLRqzNkVRHdd164ilzmrSxA95d95BVpBhRkfeQFH1jj98jJqv+5H7Tqm9AUtWUCbusXMT05sq1bf/aidjgxL+3sjAGuWK1c7+3Rf+YpzGTPT02hFvKpLTS0cFrpxXSV73dBM15BRxAK7b2JtPOBVVfCZ9fOj53enaTy5Xb2ol3NFTCVCA3KWE2S4EA1UwFqjLiw7ZFn+JQ98vgMZTSxESRqRY9Cl8gL5JmMhNus+lcBZ7IkSCkx/Qg5uo9it8gDshYUK/7kl4TLW2KztsXUUoKl/3Gl+B9/vYliJFihQpUvwv8Q90MOZVEYETtgAAAABJRU5ErkJggg=="
        id="b"
        width={49}
        height={49}
      />
    </Defs>
  </Svg>
);
