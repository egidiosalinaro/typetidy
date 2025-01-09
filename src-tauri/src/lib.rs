#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
  tauri::Builder::default()
    .setup(|_app| {
      Ok(())
    })
    .on_window_event(|e| {
      if let tauri::WindowEvent::Focused(focused) = e.event() {
        if *focused {
          e.window().set_title("TypeTidy").unwrap();
        }
      }
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
