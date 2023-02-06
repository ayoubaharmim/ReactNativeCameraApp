//
//  CameraViewManager.m
//  ReactNativeCameraApp
//
//  Created by ayoub aharmim on 29/1/2023.
//

//#import <Foundation/Foundation.h>
//#import <React/RCTViewManager.h>
//#import <React/RCTUIManager.h>
//#import "React/RCTBridgeModule.h"
//
//@interface RCT_EXTERN_MODULE(CameraViewManager, RCTViewManager)
//
////RCT_EXTERN_METHOD(start)
//RCT_EXTERN_METHOD(takePhoto)
//
//@end

//#import <Foundation/Foundation.h>
//#import <React/RCTViewManager.h>
//#import <ARKit/ARKit.h>
//
//@interface RCT_EXTERN_MODULE(CameraViewManager, RCTViewManager)
//
//RCT_EXPORT_VIEW_PROPERTY(onResultImageExported, RCTBubblingEventBlock)
//RCT_EXTERN_METHOD(start)
//RCT_EXTERN_METHOD(takePhoto)
//
//@end

#import <React/RCTViewManager.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(CameraViewManager, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(onResultImageExported, RCTBubblingEventBlock)

RCT_EXTERN_METHOD(takePhoto: (nonnull NSNumber *)reactTag
                  resolver: (RCTPromiseResolveBlock)resolve
                  rejecter: (RCTPromiseRejectBlock)reject)
@end
