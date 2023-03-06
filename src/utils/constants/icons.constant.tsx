import { ReactNode } from "react";

export const ICONS: Record<string, ReactNode> = {
  // social
  facebook: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 7.33333H6V10H8V18H11.3333V10H13.7333L14 7.33333H11.3333V6.2C11.3333 5.6 11.4667 5.33333 12.0667 5.33333H14V2H11.4667C9.06667 2 8 3.06667 8 5.06667V7.33333Z" />
    </svg>
  ),
  instagram: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 3.46667C12.1333 3.46667 12.4 3.46667 13.2667 3.53333C15.4667 3.6 16.4667 4.66667 16.5333 6.8C16.6 7.66667 16.6 7.86667 16.6 10C16.6 12.1333 16.6 12.4 16.5333 13.2C16.4667 15.3333 15.4 16.4 13.2667 16.4667C12.4 16.5333 12.2 16.5333 10 16.5333C7.86667 16.5333 7.6 16.5333 6.8 16.4667C4.6 16.4 3.6 15.3333 3.53333 13.2C3.46667 12.3333 3.46667 12.1333 3.46667 10C3.46667 7.86667 3.46667 7.6 3.53333 6.8C3.6 4.66667 4.66667 3.6 6.8 3.53333C7.6 3.46667 7.86667 3.46667 10 3.46667ZM10 2C7.8 2 7.53333 2 6.73333 2.06667C3.8 2.2 2.2 3.8 2.06667 6.73333C2 7.53333 2 7.8 2 10C2 12.2 2 12.4667 2.06667 13.2667C2.2 16.2 3.8 17.8 6.73333 17.9333C7.53333 18 7.8 18 10 18C12.2 18 12.4667 18 13.2667 17.9333C16.2 17.8 17.8 16.2 17.9333 13.2667C18 12.4667 18 12.2 18 10C18 7.8 18 7.53333 17.9333 6.73333C17.8 3.8 16.2 2.2 13.2667 2.06667C12.4667 2 12.2 2 10 2ZM10 5.86667C7.73333 5.86667 5.86667 7.73333 5.86667 10C5.86667 12.2667 7.73333 14.1333 10 14.1333C12.2667 14.1333 14.1333 12.2667 14.1333 10C14.1333 7.73333 12.2667 5.86667 10 5.86667ZM10 12.6667C8.53333 12.6667 7.33333 11.4667 7.33333 10C7.33333 8.53333 8.53333 7.33333 10 7.33333C11.4667 7.33333 12.6667 8.53333 12.6667 10C12.6667 11.4667 11.4667 12.6667 10 12.6667ZM14.2667 4.8C13.7333 4.8 13.3333 5.2 13.3333 5.73333C13.3333 6.26667 13.7333 6.66667 14.2667 6.66667C14.8 6.66667 15.2 6.26667 15.2 5.73333C15.2 5.2 14.8 4.8 14.2667 4.8Z" />
    </svg>
  ),
  twitter: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.03186 16.0036C13.0699 16.0036 16.3718 11.0012 16.3718 6.66357C16.3718 6.52144 16.3689 6.38005 16.3624 6.2392C17.0033 5.77588 17.5605 5.19756 18 4.53953C17.4118 4.80085 16.7789 4.97682 16.1149 5.05616C16.7926 4.64981 17.313 4.0067 17.5585 3.24021C16.9241 3.61636 16.2217 3.88969 15.4742 4.03709C14.8749 3.39908 14.0218 3 13.0779 3C11.2648 3 9.79464 4.4702 9.79464 6.28233C9.79464 6.54001 9.82357 6.79041 9.87962 7.0308C7.1516 6.89377 4.73239 5.58735 3.11352 3.60125C2.83127 4.08622 2.66877 4.64999 2.66877 5.25106C2.66877 6.38988 3.24837 7.3953 4.12968 7.98363C3.59121 7.96707 3.08531 7.81894 2.64293 7.57291C2.6422 7.58656 2.6422 7.60039 2.6422 7.61476C2.6422 9.2047 3.77392 10.532 5.27578 10.8329C5.00008 10.908 4.71001 10.9484 4.41047 10.9484C4.19901 10.9484 3.99338 10.9273 3.79339 10.8893C4.21121 12.1933 5.42318 13.1425 6.86007 13.1693C5.73636 14.0499 4.32094 14.5745 2.78305 14.5745C2.51827 14.5745 2.25695 14.5594 2 14.529C3.45273 15.46 5.17769 16.0036 7.03186 16.0036Z" />
    </svg>
  ),
  linkedin: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.33333 3.66667C5.33333 4.6 4.6 5.33333 3.66667 5.33333C2.73333 5.33333 2 4.6 2 3.66667C2 2.73333 2.73333 2 3.66667 2C4.6 2 5.33333 2.73333 5.33333 3.66667ZM5.33333 6.66667H2V17.3333H5.33333V6.66667ZM10.6667 6.66667H7.33333V17.3333H10.6667V11.7333C10.6667 8.6 14.6667 8.33333 14.6667 11.7333V17.3333H18V10.6C18 5.33333 12.0667 5.53333 10.6667 8.13333V6.66667Z" />
    </svg>
  ),
  youtube: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.1653 7.42995L16.168 7.43062C16.168 7.43062 16.1676 7.4305 16.1667 7.4303C16.1663 7.4302 16.1658 7.43008 16.1653 7.42995ZM5.32444 7.35686C7.91762 7.19575 12.7483 7.19575 15.3415 7.35686L15.3422 7.3644C15.4047 7.99716 15.4299 8.84143 15.4299 10.0192C15.4299 11.1824 15.4053 12.0269 15.3441 12.665C12.6962 12.7703 7.97129 12.7703 5.32282 12.665C5.261 12.0332 5.23602 11.1914 5.23602 10.0192C5.23602 8.84143 5.26123 7.99716 5.32369 7.3644L5.32444 7.35686ZM16.2422 12.6111C16.2422 12.6111 16.2405 12.6115 16.237 12.6122L16.2422 12.6111ZM4.49794 12.6077L4.50063 12.6084C4.49881 12.6079 4.49792 12.6077 4.49794 12.6077ZM1 10.0192C1 14.8412 1.38887 16.63 4.42208 16.8633C7.22196 17.0189 13.4439 17.0189 16.2438 16.8633C19.277 16.7078 19.6659 14.8412 19.6659 10.0192C19.6659 5.19713 19.277 3.40832 16.2438 3.17499C13.4439 2.94167 7.22196 2.94167 4.42208 3.17499C1.38887 3.40832 1 5.19713 1 10.0192ZM4.49794 7.43062C4.49792 7.43061 4.49884 7.43037 4.50073 7.42992L4.49794 7.43062ZM10.7823 11.7389C9.50388 12.3781 7.99973 11.4484 7.99973 10.0192C7.99973 8.58986 9.50388 7.66025 10.7823 8.29945C12.1994 9.008 12.1994 11.0303 10.7823 11.7389Z"
      />
    </svg>
  ),

  email: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.5774 6.13916C13.5774 6.13916 10.9023 9.34969 8.94579 9.34969C6.99007 9.34969 4.28497 6.13916 4.28497 6.13916"
        stroke="#46A358"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 8.59733C1 2.89891 2.98413 1 8.93651 1C14.8889 1 16.873 2.89891 16.873 8.59733C16.873 14.2949 14.8889 16.1947 8.93651 16.1947C2.98413 16.1947 1 14.2949 1 8.59733Z"
        stroke="#46A358"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  phone: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_104_870)">
        <path d="M11.2938 1C14.3779 1.3425 16.8146 3.77583 17.1613 6.86" stroke="#46A358" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M11.2938 3.95239C12.7696 4.23906 13.9229 5.39323 14.2104 6.86906"
          stroke="#46A358"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.75041 12.2908C0.00208635 6.54177 0.819484 3.90921 1.42545 3.06088C1.5033 2.92377 3.42206 0.0514851 5.47882 1.73664C10.584 5.94113 4.12092 5.34668 8.40783 9.63432C12.6956 13.9211 12.1003 7.45821 16.3049 12.5623C17.9901 14.6199 15.1177 16.5386 14.9815 16.6156C14.1331 17.2224 11.4996 18.0398 5.75041 12.2908Z"
          stroke="#46A358"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_104_870">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),

  site: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.3418 7.42531C11.3418 6.27425 10.4091 5.34155 9.25808 5.34155C8.10787 5.34155 7.17517 6.27425 7.17517 7.42531C7.17517 8.57552 8.10787 9.50822 9.25808 9.50822C10.4091 9.50822 11.3418 8.57552 11.3418 7.42531Z"
        stroke="#46A358"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.24959 16C6.83457 16 3 11.7989 3 7.3322C3 3.83539 5.79758 1 9.24959 1C12.7016 1 15.5 3.83539 15.5 7.3322C15.5 11.7989 11.6654 16 9.24959 16Z"
        stroke="#46A358"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  search: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.5726 18.0029C12.5755 21.1865 6.988 20.3056 4.02842 16.6542C1.17191 13.129 1.35056 8.04347 4.44943 4.82482C7.65137 1.49941 12.6854 1.05548 16.3346 3.78337C17.642 4.76051 18.6183 6.00364 19.2542 7.50838C19.8938 9.02186 20.0881 10.5965 19.8663 12.2205C19.6452 13.837 19 15.2775 17.9499 16.6217C18.0349 16.6773 18.1255 16.7173 18.1904 16.7822C19.3448 17.9311 20.4947 19.0843 21.6491 20.2331C21.9227 20.5054 22.0589 20.8225 21.9776 21.2047C21.8165 21.9651 20.9107 22.2586 20.3298 21.7366C20.0575 21.4925 19.807 21.2234 19.5484 20.9649C18.6002 20.0177 17.6526 19.0699 16.7044 18.1227C16.665 18.0853 16.6238 18.0503 16.5726 18.0029ZM17.9605 10.9868C17.9705 7.12689 14.8529 4.00627 10.9826 4.00065C7.12292 3.99503 4.00781 7.09068 3.99094 10.9481C3.97408 14.8173 7.08544 17.9467 10.9676 17.9648C14.8117 17.9829 17.9505 14.8504 17.9605 10.9868Z"
        fill="#3D3D3D"
      />
    </svg>
  ),

  cart: (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.1558 20.25H9.89066C6.78905 20.25 4.26569 17.7267 4.26569 14.6251V8.85947C4.26569 5.9762 2.82861 3.30739 0.421544 1.72031C-0.0107343 1.43531 -0.130077 0.853876 0.154921 0.421598C0.439919 -0.0107278 1.02131 -0.130118 1.45368 0.154974C2.82776 1.06097 3.94254 2.2559 4.73969 3.63167C4.91195 3.82466 6.30104 5.29699 8.57821 5.29699H19.3738C22.3191 5.24191 24.6245 8.19769 23.8544 11.0406L22.6117 15.9939C21.9829 18.4998 19.7394 20.25 17.1558 20.25ZM5.90415 6.64234C6.06001 7.36238 6.14068 8.10483 6.14068 8.85947V14.6251C6.14068 16.6928 7.82292 18.375 9.89066 18.375H17.1558C18.8782 18.375 20.3739 17.2082 20.793 15.5376L22.0358 10.5844C22.4933 8.89509 21.1233 7.13931 19.3738 7.17198H8.57817C7.54828 7.17198 6.65185 6.94993 5.90415 6.64234ZM9.42191 22.8281C9.42191 22.1809 8.89724 21.6563 8.25004 21.6563C6.69511 21.7182 6.69647 23.9387 8.25004 24C8.89724 24 9.42191 23.4753 9.42191 22.8281ZM18.75 22.8281C18.75 22.1809 18.2253 21.6563 17.5781 21.6563C16.0232 21.7182 16.0245 23.9387 17.5781 24C18.2253 24 18.75 23.4753 18.75 22.8281ZM20.3113 9.98446C20.3113 9.46668 19.8916 9.04697 19.3738 9.04697H8.95316C7.7093 9.09647 7.71023 10.8729 8.95316 10.922H19.3738C19.8916 10.922 20.3113 10.5022 20.3113 9.98446Z"
        fill="#3D3D3D"
      />
    </svg>
  ),

  login: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.1592 12.1006H10.125" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.7202 9.67059L20.1602 12.1006L17.7202 14.5306" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M15.6332 8.35823C15.3582 5.3749 14.2415 4.29156 9.79985 4.29156C3.88234 4.29156 3.88234 6.21656 3.88234 11.9999C3.88234 17.7832 3.88234 19.7082 9.79985 19.7082C14.2415 19.7082 15.3582 18.6249 15.6332 15.6416"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
};
