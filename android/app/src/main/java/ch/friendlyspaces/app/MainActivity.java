package ch.friendlyspaces.app;

import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import androidx.core.graphics.Insets;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsControllerCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.ViewCompat;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    private static final int SPLASH_PINK = Color.parseColor("#F4DDFF");

    private void enforcePinkBackgroundSurface() {
        Window window = getWindow();
        window.setBackgroundDrawable(new ColorDrawable(SPLASH_PINK));
        View decor = window.getDecorView();
        decor.setBackgroundColor(SPLASH_PINK);
        if (getBridge() != null && getBridge().getWebView() != null) {
            getBridge().getWebView().setBackgroundColor(SPLASH_PINK);
        }
    }

    private void enforceWebViewSafeInsets() {
        final View contentRoot = findViewById(android.R.id.content);
        if (contentRoot == null) return;

        ViewCompat.setOnApplyWindowInsetsListener(contentRoot, (view, insets) -> {
            View webView = getBridge() != null ? getBridge().getWebView() : null;
            if (webView == null) return insets;

            Insets safeInsets = insets.getInsets(
                WindowInsetsCompat.Type.systemBars() | WindowInsetsCompat.Type.displayCutout()
            );

            // Keep top/bottom handled by existing status/nav behavior; only protect cutout sides.
            webView.setPadding(safeInsets.left, 0, safeInsets.right, 0);
            return insets;
        });

        ViewCompat.requestApplyInsets(contentRoot);
    }

    private void enforceCutoutSafeArea() {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.P) return;
        Window window = getWindow();
        WindowManager.LayoutParams params = window.getAttributes();
        params.layoutInDisplayCutoutMode = WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_NEVER;
        window.setAttributes(params);
    }

    private void enforceStatusBarStyle() {
        Window window = getWindow();
        WindowCompat.setDecorFitsSystemWindows(window, true);
        window.clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);
        window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
        window.setStatusBarColor(Color.parseColor("#1E52BA"));
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
            window.setStatusBarContrastEnforced(false);
        }
        int flags = window.getDecorView().getSystemUiVisibility();
        flags &= ~View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR;
        window.getDecorView().setSystemUiVisibility(flags);
        WindowInsetsControllerCompat controller = WindowCompat.getInsetsController(window, window.getDecorView());
        if (controller != null) {
            controller.setAppearanceLightStatusBars(false);
        }
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        enforcePinkBackgroundSurface();
        enforceCutoutSafeArea();
        enforceStatusBarStyle();
        enforceWebViewSafeInsets();
    }

    @Override
    public void onResume() {
        super.onResume();
        enforcePinkBackgroundSurface();
        enforceCutoutSafeArea();
        enforceStatusBarStyle();
        enforceWebViewSafeInsets();
        Window window = getWindow();
        window.getDecorView().post(this::enforcePinkBackgroundSurface);
        window.getDecorView().post(this::enforceCutoutSafeArea);
        window.getDecorView().post(this::enforceWebViewSafeInsets);
        window.getDecorView().postDelayed(this::enforceStatusBarStyle, 120);
        window.getDecorView().postDelayed(this::enforcePinkBackgroundSurface, 120);
        window.getDecorView().postDelayed(this::enforceCutoutSafeArea, 120);
        window.getDecorView().postDelayed(this::enforceWebViewSafeInsets, 120);
        window.getDecorView().postDelayed(this::enforceStatusBarStyle, 450);
        window.getDecorView().postDelayed(this::enforcePinkBackgroundSurface, 450);
        window.getDecorView().postDelayed(this::enforceCutoutSafeArea, 450);
        window.getDecorView().postDelayed(this::enforceWebViewSafeInsets, 450);
    }
}
