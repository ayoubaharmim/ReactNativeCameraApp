//
//  CameraManager.swift
//  ReactNativeCameraApp
//
//  Created by ayoub aharmim on 29/1/2023.
//


import Foundation
import UIKit
import React

@objc(CameraViewManager)
class CameraViewManager: RCTViewManager {

    override func view() -> UIView! {
      return CameraView()
    }
  
  @objc
    func takePhoto(_ node: NSNumber, resolver: RCTPromiseResolveBlock, rejecter reject: RCTPromiseRejectBlock) {
      DispatchQueue.main.async {
          let cameraView = self.bridge.uiManager.view(forReactTag: node) as! CameraView
          cameraView.takePhoto()
        }
    }
  
  override static func requiresMainQueueSetup() ->Bool {
    return true;
  }
  
}
