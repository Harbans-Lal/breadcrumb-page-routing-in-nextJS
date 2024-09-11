import * as React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbDivider,
  BreadcrumbButton,
} from "@fluentui/react-components";
import {
  BuildingHomeRegular,
  TrayItemAddRegular,
  CartRegular,
  PaymentRegular,
  AppsListDetailRegular,
  PersonSupportRegular,
  AppFolderRegular
} from "@fluentui/react-icons";
import Link from "next/link";

import { useRouter } from "next/router";

 const BreadCrumbb1 = () => {
    const router = useRouter();
    const path = router.pathname;

  return (
    <Breadcrumb aria-label="Breadcrumb default example">
        {(path.includes('/') || path==='/') &&
            
             <BreadcrumbItem>
             <Link href='/' >
                <BreadcrumbButton icon={<BuildingHomeRegular />}  current = {path ==='/' }>project</BreadcrumbButton>
             </Link>
                
            </BreadcrumbItem>
        }
        { ( path.includes('/') || path==='/') &&  <BreadcrumbDivider />  }


       {(path.includes('/dashboard') || path==='/dashboard') && 
             <BreadcrumbItem>
             <Link href='/dashboard'  >
                <BreadcrumbButton  icon={<AppFolderRegular />} current = {path === '/dashboard'}>
                Dashnoard
                </BreadcrumbButton>
             </Link>
             </BreadcrumbItem>
       } 
         { ( path.includes('/dashboard/') || path==='/dashboard/') &&  <BreadcrumbDivider />  }


      {(path.includes('/dashboard/admin') || path==='/dashboard/admin') && 
            <BreadcrumbItem>
            <Link href='/dashboard/admin' >
                 <BreadcrumbButton icon={<PersonSupportRegular />} current = {path === '/dashboard/admin' }>Admin</BreadcrumbButton>
            </Link>
          </BreadcrumbItem>
      }
     { ( path.includes('/dashboard/admin/') || path==='/dashboard/admin/') &&  <BreadcrumbDivider />  }


      {( path.includes('/dashboard/admin/home') || path==='/dashboard/admin/home') && 
              <BreadcrumbItem>
              <Link href='/dashboard/admin/home' >
                <BreadcrumbButton icon={<BuildingHomeRegular />} current = {path === '/dashboard/admin/home'}>
                    Home
                </BreadcrumbButton>
              </Link>
              
            </BreadcrumbItem>
      }
    { ( path.includes('/dashboard/admin/home/') || path==='/dashboard/admin/home/') &&  <BreadcrumbDivider />  }


      {( path.includes('/dashboard/admin/home/products/') || path==='/dashboard/admin/home/products') && 
              <BreadcrumbItem>
              <Link  href='/dashboard/admin/home/products' >
                <BreadcrumbButton icon={<TrayItemAddRegular />} current = {path === '/dashboard/admin/home/products' } >
                    Products
                </BreadcrumbButton>
              </Link>
              
            </BreadcrumbItem>
      }
    { ( path.includes('/dashboard/admin/home/products/') || path==='/dashboard/admin/home/products/') &&  <BreadcrumbDivider />  }



      {(path.includes('/dashboard/admin/home/products/add-to-cart') || path==='/dashboard/admin/home/products/add-to-cart/') && 
              <BreadcrumbItem>
              <Link href='/dashboard/admin/home/products/add-to-cart/'>
                <BreadcrumbButton icon={<CartRegular />} current = {path === '/dashboard/admin/home/products/add-to-cart' } >
                    Add to cart
                </BreadcrumbButton>
              </Link>
              
            </BreadcrumbItem>
      }
    { ( path.includes('/dashboard/admin/home/products/add-to-cart/') || path==='/dashboard/admin/home/products/add-to-cart/') &&  <BreadcrumbDivider />  }


      {( path.includes('/dashboard/admin/home/products/add-to-cart/checkout') || path==='/dashboard/admin/home/products/add-to-cart/checkout') && 
              <BreadcrumbItem>
              <Link href='/dashboard/admin/home/products/add-to-cart/checkout'>
                <BreadcrumbButton icon={<PaymentRegular />} current = {path==='/dashboard/admin/home/products/add-to-cart/checkout' } >
                    Checkout
                </BreadcrumbButton>
              </Link>
              
            </BreadcrumbItem>
      }
    { ( path.includes('/dashboard/admin/home/products/add-to-cart/checkout/status') || path==='/dashboard/admin/home/products/add-to-cart/checkout/status') &&  <BreadcrumbDivider />  }

        {path==='/dashboard/admin/home/products/add-to-cart/checkout/status' && 
                  <BreadcrumbItem>
                  <Link href='/dashboard/admin/home/products/add-to-cart/checkout/status'>
                    <BreadcrumbButton icon={<AppsListDetailRegular />}  current >
                        Status
                    </BreadcrumbButton>
                  </Link>
                 
                </BreadcrumbItem>
        }
    </Breadcrumb>
  );
};

export default BreadCrumbb1;